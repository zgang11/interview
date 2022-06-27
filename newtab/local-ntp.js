/*global chrome,Sortable */
const isSchemeAllowed = function (url) {
    return url.startsWith('http://') || url.startsWith('https://') ||
      url.startsWith('ftp://') || url.startsWith('chrome-extension://');
  };
  function $(id) {
    // eslint-disable-next-line no-restricted-properties
    return document.getElementById(id);
  }
  // cache class
  class ImageCache {
    constructor() {
      this.db = null;
      this.dbName = "imageCache";
      this.tableName = "images";
      this._ready = false;
      this.ready();
  
    }
  
    ready() {
      return new Promise((resolve, reject) => {
        if (this.db != null) {
          resolve();
  
        } else {
  
          if (window.indexedDB) {
            const dbRequest = window.indexedDB.open(this.dbName);
            dbRequest.onerror = (event) => {
              this.db = null;
              reject();
            };
            dbRequest.onsuccess = (event) => {
              this.db = dbRequest.result;
              resolve();
            };
            dbRequest.onupgradeneeded = (event) => {
  
              const db = event.target.result;
              let objectStore;
              if (!db.objectStoreNames.contains(this.tableName)) {
                objectStore = db.createObjectStore(this.tableName, {
                  keyPath: 'url'
                });
                objectStore.createIndex('url', 'url', {
                  unique: true
                });
                objectStore.createIndex('data', 'data', {
                  unique: false
                });
                objectStore.createIndex('using', 'using', {
                  unique: true
                });
              }
            };
          }
        }
  
      });
    }
  
    async get(url) {
  
      if (this.db == null) {
        await this.ready();
      }
      return await this.getData(url);
  
    }
  
    getData(url) {
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction([this.tableName]);
        const store = transaction.objectStore(this.tableName);
        const index = store.index('url');
        const request = index.get(url);
  
        request.onerror = (event) => {
          reject();
        };
        request.onsuccess = (event) => {
          if (request.result) {
            resolve(request.result.data);
          } else {
            resolve(null);
          }
        };
      });
  
    }
  
    async put(url, data, using = true) {
  
      if (this.db == null) {
        await this.ready();
      }
      return await this.putData(url, data, using);
  
    }
  
    putData(url, data, using) {
      return new Promise((resolve, reject) => {
        const request = this.db.transaction([this.tableName], 'readwrite')
          .objectStore(this.tableName)
          .put({
            url,
            data,
            using
          });
  
        request.onsuccess = (event) => {
          resolve();
        };
  
        request.onerror = (event) => {
          reject();
        };
  
      });
    }
  
    async clearUp() {
      if (this.db == null) {
        await this.ready();
      }
      const objectStore = this.db.transaction(this.tableName).objectStore(this.tableName);
      objectStore.openCursor().onsuccess = async (event) => {
        const cursor = event.target.result;
  
        if (cursor) {
          if (cursor.value.using !== true) {
            await this.remove(cursor.value.url);
          }
          cursor.continue();
        } else {
          console.log('no more data');
        }
      };
    }
  
    async remove(url) {
      if (this.db == null) {
        await this.ready();
      }
      const transaction = this.db.transaction([this.tableName], 'readwrite');
      transaction.objectStore(this.tableName).delete(url);
    }
  
    fetchImage(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            const imgData = xhr.response;
            const reader = new FileReader();
            reader.onload = () => {
              this.put(url, reader.result, true);
              resolve(reader.result);
            };
            reader.readAsDataURL(imgData);
          }
        };
        xhr.onerror = (e) => {
          reject(e);
        };
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.send(null);
      });
    }
  
    async cacheDocumentImages() {
      const images = document.querySelectorAll('img');
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const url = img.getAttribute('dataSrc');
        if (url && (img.src == null || img.src.indexOf("data:") != 0)) {
          const data = await cache.get(url);
          if (data) {
            img.src = data;
          } else {
            try {
              img.src = await cache.fetchImage(url);
            } catch (ex) {
              img.src = url;
            }
          }
        }
      }
    }
  }
  
  const cache = new ImageCache();
  // global variables
  const dataStore = {
    customLinkValue: {},
    customLink: {},
    enterpriseLink: {},
    lastEnterpriseLink: "",
    get bgFilter() {
      document.documentElement.style.setProperty('--wallpaper-filter-blur', this.filterBlur + "px");
      return "blur(" + this.filterBlur + "px) brightness(" + (this.filterBrightness + 100) * 0.01 + ")";
    },
    get filterBlur() {
      const bgfilterblur = parseFloat(localStorage.getItem('bgFilterBlur'));
      return isNaN(bgfilterblur) ? 0 : bgfilterblur;
    },
    get filterBrightness() {
      const bgfilterbrightness = parseInt(localStorage.getItem('bgFilterBrightness'));
      return isNaN(bgfilterbrightness) ? 1 : bgfilterbrightness;
    },
    set filterBlur(v) {
      const num = parseFloat(v);
      v = isNaN(num) ? 8 : num;
      localStorage.setItem('bgFilterBlur', v);
      document.documentElement.style.setProperty('--wallpaper-filter-blur', v + "px");
    },
    set filterBrightness(v) {
      const num = parseInt(v);
      v = isNaN(num) ? 8 : num;
      localStorage.setItem('bgFilterBrightness', v);
    },
    get customLinkMaxNum() {
      const num = parseInt(localStorage.getItem('customLinkMaxNum'));
      return isNaN(num) ? 8 : num;
    },
    set customLinkMaxNum(v) {
      const num = parseInt(v);
      v = isNaN(num) ? 8 : num;
      localStorage.setItem('customLinkMaxNum', v);
    },
    get background() {
      const bg = localStorage.getItem('background');
      return bg ? bg : 'rgb(248,248,248)';
    },
    set background(bg) {
      localStorage.setItem('background', bg);
    },
    get enterpriseEnabled() {
      const qaxDefine = chrome && chrome.embeddedSearch && chrome.embeddedSearch.newTabPage.GetEnterpriseEnabled().enterprise_controller_enabled;
      let enabled = qaxDefine && this.enterpriseLink && this.enterpriseLink.sites && this.enterpriseLink.sites.length > 0;
      // enabled = false;
      if (enabled) {
        $('tab_bar').style.display = 'block';
        $('tab_bar_space').style.display = 'block';
      } else {
        $('tab_bar').style.display = 'none';
        $('tab_bar_space').style.display = 'none';
        showSite('site_wrapper');
      }
      return enabled;
    }
  };
  window.onload = function () {
    document.title = '新标签页';
    $('body').style.display = 'block';
  
    $('btn_close_modal_add_site').onclick = function () {
      hideModal('modal_add_site');
    };
    $('btn_modal_add_site_cancle').onclick = function () {
      hideModal('modal_add_site');
    };
    // default site-bg-icon
    document.addEventListener('error', function (e) {
      const elem = e.target;
      if (elem.className == 'site-bg-icon') {
        elem.style.visibility = 'hidden';
      }
    }, true);
  
  
    if (chrome.embeddedSearch.newTabPage.GetEnterpriseEnabled().enterprise_controller_enabled) {
      chrome.embeddedSearch.newTabPage.GetConfigCustomLinkValue();
      showSite('site_wrapper_enterprise');
    }
  
    retrieveLocalData();
  
    // document.addEventListener('visibilitychange', function () {
    //   if (document.visibilityState == 'visible') {
    //     resetBackgroundSettings();
    //     retrieveLocalData();
    //   }
    // });
  
    window.addEventListener("storage", function (e) {
  
      resetBackgroundSettings();
      retrieveLocalData();
      window.onresize();
  
    });
  
    $('btn_modal_add_site_confirm').onclick = confirmAddSite;
  
    $('add_site_title').onkeyup = function (e) {
      if (e.keyCode == 13) {
        $('add_site_addr').focus();
      }
    };
    $('add_site_title').oninput = function (e) {
      $('site_title').innerText = $('add_site_title').value.trim().substr(0, 256);
    };
    $('add_site_addr').onkeyup = onSiteAddrKeyUp;
    document.onkeyup = function (e) {
      if (e.keyCode == 27) {
        hideModal('modal_add_site');
      }
    };
  
    $('add_site_addr').oninput = function () {
      if ($('add_site_addr').value.trim() !== '') {
        hideErrorInfo();
      }
      if ($('add_site_title').value.trim() == '') {
        let newUrl = $('add_site_addr').value.trim();
        if (!isSchemeAllowed(newUrl)) {
          newUrl = 'http://' + newUrl;
        }
        $('site_title').innerText = newUrl;
      }
    };
  
    // enterprise-js
    const tabItems = document.getElementsByClassName('tab-item');
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener('click', function () {
        const blockId = this.dataset.blockId;
        showSite(blockId);
      });
    }
  
    // drag
    const wrapper = $('site_wrapper');
    Sortable.create(wrapper, {
      // disabled: true,
      animation: 350,
      forceFallback: true,
      // delay: 100,
      fallbackTolerance: 2,
      // dragoverBubble: false,
      draggable: '.item-drag',
      onUpdate: function (e) {
        // let customLinkValue = chrome.embeddedSearch.newTabPage.GetCustomLinkValue()
        // let customLink = JSON.parse(customLinkValue.custom_link)
        const sites = dataStore.customLink.sites;
        if (sites.length <= e.newIndex || sites.length <= e.oldIndex) {
          refreshView();
          return;
        }
        const old = sites[e.oldIndex];
        sites.splice(e.oldIndex, 1);
        sites.splice(e.newIndex, 0, old);
        saveLocalData();
      }
    });
    const embeddedSearchApiHandle = window.chrome.embeddedSearch;
    const ntpApiHandle = embeddedSearchApiHandle.newTabPage;
    ntpApiHandle.onconfigcustomelinkchange = onConfigCustomeLinkValueChanged;
  
    initSettings();
    initAddSite();
  
  };
  
  
  /* functions */
  
  function setNewLinkColor(color) {
    const activedColors = document.querySelectorAll('.list-color-item');
    for (const item of activedColors) {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
      if (item.dataset.color == color) {
        item.classList.add('active');
      }
    }
    $('previewBox').style.backgroundColor = color;
    $('previewBox').dataset.color = color;
  }
  function setNewLinkIcon(icon) {
    if (!icon) {
      icon = 'language';
    }
    const activedIcons = document.querySelectorAll('.list-icon-item');
    for (const item of activedIcons) {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
      if (item.innerText == icon) {
        item.classList.add('active');
      }
    }
    $('iconShow').innerText = icon;
  }
  const linkColors = ['#3eb4ef', '#f5534f', '#2d86cc', '#f57911', '#45c555', '#6a63fe', '#ff9237', '#5d1c09', '#1b7973', '#383838'];
  const linkIcons = ["language", "games", "library_music", "subtitles", "call", "forum", "stay_primary_portrait", "textsms", "vpn_key", "screen_share", "list_alt", "content_paste", "reply", "unarchive", "dvr", "widgets", "play_circle", "edit_location_alt", "wb_twilight", "storage", "insert_chart", "highlight", "cloud_queue", "desktop_mac", "security", "assistant_photo", "brightness_7", "color_lens", "style", "movie_filter", "local_airport", "local_cafe", "local_florist", "local_post_office", "local_dining", "map", "store_mall_directory", "holiday_village", "time_to_leave", "auto_stories", "data_exploration", "location_city", "school", "account_balance", "account_circle", "assignment", "assignment_turned_in", "explore", "grade", "group_work", "home", "https", "perm_camera_mic", "perm_phone_msg", "print", "redeem", "settings", "settings_applications", "settings_ethernet", "stars", "supervisor_account", "swap_vertical_circle", "verified_user", "view_carousel", "view_list", "camera_enhance", "gavel", "pets", "offline_bolt", "label_important", "supervised_user_circle", "bookmarks", "circle_notifications", "dashboard_customize", "duo", "grid_view", "mark_as_unread", "policy", "emoji_food_beverage", "emoji_events", "sports_esports", "deck", "double_arrow", "park", "self_improvement", "business_center", "spa", "build_circle", "local_fire_department", "local_police", "access_time_filled", "chair", "download_for_offline", "quiz", "smart_display", "home_repair_service", "miscellaneous_services", "family_restroom", "stroller", "soap", "table_view", "leaderboard", "yard", "navigation"];
  let editId = -1;
  function initAddSite() {
  
    $('site_title').innerHTML = '';
  
    const linkColorsElement = $('linkColors');
    linkColorsElement.innerHTML = "";
    for (let i = 0; i < linkColors.length; i++) {
      const circle = document.createElement("div");
      circle.className = "circle list-color-item";
      circle.style.backgroundColor = linkColors[i];
      circle.dataset.color = linkColors[i];
      circle.appendChild(document.createElement('div'));
      circle.onclick = () => {
        setNewLinkColor(linkColors[i]);
      };
      linkColorsElement.appendChild(circle);
    }
    setNewLinkColor(linkColors[0]);
    const linkIconsElement = $('linkIcons');
    linkIconsElement.innerHTML = '';
    for (let i = 0; i < linkIcons.length; i++) {
      const iconItem = document.createElement('span');
      iconItem.className = 'material-icons icon-small list-icon-item';
      iconItem.innerText = linkIcons[i];
      iconItem.onclick = () => {
        setNewLinkIcon(linkIcons[i]);
      };
      linkIconsElement.appendChild(iconItem);
    }
  
    setNewLinkIcon(linkIcons[0]);
  }
  
  function onConfigCustomeLinkValueChanged(data) {
    if (dataStore.lastEnterpriseLink != data) {
      dataStore.enterpriseLink = JSON.parse(data);
      refreshEnterpriseView();
      dataStore.lastEnterpriseLink = data;
    }
  }
  
  function retrieveLocalData() {
    new Promise(function (resolve, reject) {
      dataStore.customLinkValue = chrome.embeddedSearch.newTabPage.GetCustomLinkValue();
      setTimeout(() => {
        dataStore.customLinkValue = chrome.embeddedSearch.newTabPage.GetCustomLinkValue();
        resolve();
      }, 300);
    }).then(() => {
  
      if (dataStore.customLinkValue.custom_link == '') {
        dataStore.customLink = {
          version: '1',
          sites: [],
          colors: [linkColors[0]]
        };
        saveLocalData();
      } else {
        dataStore.customLink = JSON.parse(dataStore.customLinkValue.custom_link);
      }
  
      refreshView();
    });
  
  }
  
  
  function onSiteAddrKeyUp(e) {
    if (e.keyCode == 13) {
      confirmAddSite();
    }
  }
  function confirmAddSite() {
    let newTitle = $('add_site_title').value.trim().substr(0, 256);
    let newUrl = $('add_site_addr').value.trim().substr(0, 256);
    const sites = dataStore.customLink.sites;
    if (newUrl.length == 0) {
      showErrorInfo('请输入网址');
      return;
    }
  
    if (!isSchemeAllowed(newUrl)) {
      newUrl = 'http://' + newUrl;
    }
    if (newTitle.length == 0) {
      newTitle = newUrl;
      $('site_title').innerText = newUrl;
    }
  
    const newColor = [$('previewBox').dataset.color];
    const newIcon = $('iconShow').innerText;
    if (editId >= 0) {
      const site = sites.find((item) => {
        return item.id == editId;
      });
      if (site) {
        site.title = newTitle;
        site.url = newUrl;
        site.color = newColor;
        site.icon = newIcon;
        saveLocalData();
      }
    } else if (sites.length < dataStore.customLinkMaxNum) {
      sites.push({
        title: newTitle,
        url: newUrl,
        color: newColor,
        icon: newIcon
      });
      saveLocalData();
    } else {
      alert("添加失败：已超出个数限制");
    }
  
    refreshView();
    hideModal('modal_add_site');
  }
  
  
  function showModal(modal_id) {
    hideErrorInfo();
  
    $(modal_id).showModal();
  }
  
  function hideModal(modal_id) {
    $(modal_id).close();
  }
  
  function showErrorInfo(txt) {
    $('error_info').style.display = 'block';
    $('error_info').innerHTML = txt;
  }
  
  function hideErrorInfo() {
    $('error_info').style.display = 'none';
  }
  
  function showSite(blockId) {
    const items = document.getElementsByClassName('tab-item');
    if (blockId == 'site_wrapper_enterprise') {
      items[1].classList.remove('active');
      items[0].classList.add('active');
    } else {
      items[0].classList.remove('active');
      items[1].classList.add('active');
    }
  
    const wrappers = document.getElementsByClassName('site-wrapper');
    for (let w = 0; w < wrappers.length; w++) {
      wrappers[w].classList.remove('active');
    }
    $(blockId).classList.add('active');
  }
  
  
  function retrieveLocalData() {
    dataStore.customLinkValue = localStorage.getItem('customLink');
  
    if (!dataStore.customLinkValue) {
      dataStore.customLink = {
        version: '1',
        sites: [],
        icon: 'language',
        colors: ['#3eb4ef']
      };
      saveLocalData();
    } else {
      dataStore.customLink = JSON.parse(dataStore.customLinkValue);
      refreshView();
    }
  
    // refreshEnterpriseView();
  }
  
  function saveLocalData() {
    for (let i = 0; i < dataStore.customLink.sites.length; i++) {
      dataStore.customLink.sites[i].id = i;
    }
    localStorage.setItem('customLink', JSON.stringify(dataStore.customLink));
    refreshView();
  }
  
  function refreshView() {
    const sitesWrapper = $('site_wrapper');
    sitesWrapper.innerHTML = '';
    const sites = dataStore.customLink.sites;
    // fill links
    for (let i = 0; i < sites.length && i < dataStore.customLinkMaxNum; i++) {
      const site = sites[i];
      const a = document.createElement('a');
      a.href = site.url;
      a.title = site.title;
      a.setAttribute('ondragstart', 'return false');
      a.classList.add('item-drag');
      a.dataset.color = site.color[0];
      const siteBlock = document.createElement('div');
      siteBlock.className = 'site';
      siteBlock.style.backgroundColor = site.color[0];
      // siteBlock.style.border = '1px solid ' + site.color[1];
      // siteBlock.style.border = '1px solid transparent';
      siteBlock.style.border = 'none';
      const contentBlock = document.createElement('div');
      const icon = document.createElement('div');
      icon.className = 'site-icon';
      const span = document.createElement('span');
      span.className = 'material-icons icon-big';
      span.innerText = site.icon ? site.icon : 'language';
      const title = document.createElement('div');
      title.className = 'site-title';
      title.innerText = site.title;
      const toolBar = document.createElement('div');
      toolBar.className = 'tool-bar';
      toolBar.dataset.id = i;
      const btnEdit = document.createElement('div');
      btnEdit.className = 'btn-edit-site';
      btnEdit.title = '编辑';
  
      btnEdit.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        showModal('modal_add_site');
        editId = site.id;
        $('add_site_title').value = site.title;
        $('site_title').innerText = site.title;
        $('add_site_addr').value = site.url;
        $('add_site_title').focus();
        setNewLinkColor(site.color[0]);
        setNewLinkIcon(site.icon);
  
      });
  
      const btnDel = document.createElement('div');
      btnDel.className = 'btn-del-site';
      btnDel.title = '移除';
  
      btnDel.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let sites = dataStore.customLink.sites;
        dataStore.customLink.sites = sites.filter(item => item.id != this.parentNode.dataset.id);
        saveLocalData();
      });
  
      icon.appendChild(span);
      contentBlock.appendChild(icon);
      contentBlock.appendChild(title);
      siteBlock.appendChild(contentBlock);
      toolBar.appendChild(btnDel);
      toolBar.appendChild(btnEdit);
      siteBlock.appendChild(toolBar);
      a.appendChild(siteBlock);
  
      sitesWrapper.appendChild(a);
    }
    // append plus icon
    if (sites.length < dataStore.customLinkMaxNum) {
      const addA = document.createElement('a');
      addA.classList.add('item-ignore');
      const divOuter = document.createElement('div');
      divOuter.classList.add('site', 'site-add');
      divOuter.style.backgroundColor = 'rgba(255,255,255,0.7)';
      // divOuter.style.border = '1px solid transparent';
      divOuter.style.border = 'none';
      const divContainer = document.createElement('div');
      const divInner = document.createElement('div');
      divInner.classList.add('site-icon', 'site-icon-add');
      divInner.setAttribute('ondragstart', 'return false');
      const addImg = document.createElement('img');
      addImg.style.opacity = '0.4';
      addImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMC0yOFQxMzo1Mzo1MSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTAtMjhUMTM6NTU6MzkrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTAtMjhUMTM6NTU6MzkrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmNiZDQyZjgtNWQ0MC1lYjQ2LWE3YzgtN2Y3MDNlOWFiNjM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmJjYmQ0MmY4LTVkNDAtZWI0Ni1hN2M4LTdmNzAzZTlhYjYzNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJjYmQ0MmY4LTVkNDAtZWI0Ni1hN2M4LTdmNzAzZTlhYjYzNyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YmNiZDQyZjgtNWQ0MC1lYjQ2LWE3YzgtN2Y3MDNlOWFiNjM3IiBzdEV2dDp3aGVuPSIyMDIxLTEwLTI4VDEzOjUzOjUxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlEB3g0AAABGSURBVFjD7dKxCQAwEAJA91/arJAUeXg4wc7iCpN/6dWofWqAgYGBgYGBgYGBgYGBgSfBXVaXAAYGBgYGBgYGBgYGBp4BH7UAXPiGREUAAAAAAElFTkSuQmCC';
  
      divInner.appendChild(addImg);
      divContainer.appendChild(divInner);
      divOuter.appendChild(divContainer);
      addA.appendChild(divOuter);
      addA.addEventListener('click', function () {
        showModal('modal_add_site');
        editId = -1;
        $('add_site_title').value = '';
        $('site_title').innerText = '';
        $('add_site_addr').value = '';
        $('add_site_title').focus();
        setNewLinkColor(linkColors[0]);
        setNewLinkIcon(linkIcons[0]);
      });
      sitesWrapper.appendChild(addA);
    }
    // fill empty
    for (let i = 0; i < dataStore.customLinkMaxNum - 1 - sites.length; i++) {
      const a = document.createElement('a');
      a.classList.add('item-ignore');
      const divOuter = document.createElement('div');
      divOuter.classList.add('site', 'site-empty');
      divOuter.style.backgroundColor = 'rgba(255,255,255,0.3)';
      // divOuter.style.border = '1px solid transparent';
      divOuter.style.border = 'none';
      const divContainer = document.createElement('div');
      const divInner = document.createElement('div');
      divInner.classList.add('site-icon', 'site-icon-add');
      divInner.setAttribute('ondragstart', 'return false');
      const addImg = document.createElement('img');
      addImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAbUlEQVRYhe3YwQnAIBQE0Z9g/6VsixsCluAchHng9TuoJ6ctspKUmPvOZQymGUwzmGYwzWCawTSDaQbTDKY9Sagt+s8/PfS6E177JCjHZy/i2jbkSfgvQTOYZjDNYJrBNINpBtMMphlMMxg1Mx+fAQ2AabNfzwAAAABJRU5ErkJggg==';
      divInner.style.visibility = 'hidden';
  
      divInner.appendChild(addImg);
      divContainer.appendChild(divInner);
      divOuter.appendChild(divContainer);
      a.appendChild(divOuter);
      sitesWrapper.appendChild(a);
    }
  }
  
  function refreshEnterpriseView() {
    if (!dataStore.enterpriseEnabled) return;
    const sitesWrapper = $('site_wrapper_enterprise');
    sitesWrapper.innerHTML = '';
    const sites = dataStore.enterpriseLink.sites;
    for (let i = 0; i < sites.length && i < 52; i++) {
      const site = sites[i];
      const a = document.createElement('a');
      a.href = site.url;
      a.title = site.title;
      // a.dataset.color = site.color[0]
      const siteBlock = document.createElement('div');
      siteBlock.className = 'site';
      siteBlock.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      // siteBlock.style.border = '1px solid transparent';
      siteBlock.style.border = 'none';
      const contentBlock = document.createElement('div');
      const icon = document.createElement('div');
      icon.className = 'site-icon-enterprise';
      const img = document.createElement('img');
      img.className = 'site-bg-icon';
      img.setAttribute("dataSrc", site.icon);
      // img.src = site.icon;
      // const title = document.createElement('div')
      // title.className = 'site-title'
      // title.innerHTML = site.title
      const showBar = document.createElement('div');
      showBar.className = 'show-bar';
      showBar.innerText = site.title;
  
      icon.appendChild(img);
      contentBlock.appendChild(icon);
      // contentBlock.appendChild(title);
      siteBlock.appendChild(contentBlock);
      siteBlock.appendChild(showBar);
      a.appendChild(siteBlock);
  
      sitesWrapper.appendChild(a);
    }
  
    // padding empty block & set cover height
    let blockNum = 0;
    if (sites.length < 8) {
      blockNum = 8 - sites.length;
    } else if (sites.length % 4 > 0) {
      blockNum = 4 - sites.length % 4;
    }
    for (let i = 0; i < blockNum; i++) {
      const a = document.createElement('a');
      a.classList.add('item-ignore');
      const divOuter = document.createElement('div');
      divOuter.classList.add('site', 'site-empty');
      divOuter.style.opacity = 0;
      const divContainer = document.createElement('div');
      divOuter.appendChild(divContainer);
      a.appendChild(divOuter);
      sitesWrapper.appendChild(a);
    }
    // $('site_cover').style.height = siteOverHeight * 2 + 'rem';
    window.onresize();
    showSite('site_wrapper_enterprise');
    cache.cacheDocumentImages();
  }
  
  window.onresize = () => {
    const n = dataStore.customLinkMaxNum == 0 ? 8 : dataStore.customLinkMaxNum;
    if (window.innerWidth < 506) {
      $('site_cover').style.height = Math.ceil(n) * 10 + 'rem';
      $('site_wrapper').style.height = '80rem';
    } else if (window.innerWidth <= 1044) {
      $('site_cover').style.height = Math.ceil(n / 2) * 10 + 'rem';
      $('site_wrapper').style.height = '40rem';
    } else {
      $('site_cover').style.height = Math.ceil(n / 4) * 10 + 'rem';
      $('site_wrapper').style.height = '19.2rem';
    }
  };
  
  
  function initSettings() {
  
    setTimeout(() => {
      $("background-mask").style.opacity = '1';
      document.querySelector('.container').style.opacity = '1';
    }, 1);
  
    $('close_settings_btn').addEventListener('click', () => {
      $('modal_settings').style.transform = 'translateX(300px)';
    });
  
    $('linkMaxNums').addEventListener('click', (e) => {
      let max = e.target.dataset['value'];
      if (!isNaN(parseInt(max))) {
        changeLinkMaxNumber(parseInt(max));
      }
    });
  
    document.querySelector('.container').addEventListener("click", () => {
      $('modal_settings').style.transform = 'translateX(300px)';
    });
    $('edit-bg').addEventListener("click", (e) => {
      if ($('modal_settings').style.transform == 'translateX(0px)') {
        $('modal_settings').style.transform = 'translateX(300px)';
      } else {
        $('modal_settings').style.transform = 'translateX(0px)';
      }
    });
  
  
    $('bg-list').addEventListener('click', (e) => {
      const bgValue = e.target.dataset['value'];
      if (bgValue == 'custom') {
        // selectLoaclImage();
        return;
      }
      if (bgValue && bgValue != '') {
        changeBackground(bgValue);
        removeBgBtnFocus();
        e.target.classList.add('checked');
        dataStore.filterBlur = 0;
        dataStore.filterBrightness = 0;
        $('bg-blur').value = dataStore.filterBlur * 10;
        $('bg-blur').style.backgroundSize = parseInt($('bg-blur').value) * 0.5 + "%";
        $('bg-brightness').value = dataStore.filterBrightness;
        setBackgroundFilter();
        // chrome.embeddedSearch.newTabPage.resetBackgroundInfo();
  
      }
    });
  
  
    $('bg-blur').addEventListener('change', (e) => {
      changeBackgroundBlur($('bg-blur').value);
    });
  
    $('bg-brightness').addEventListener('change', (e) => {
      changeBackgroundBrightness($('bg-brightness').value);
    });
  
    $('bg-blur').addEventListener('input', (e) => {
      changeBackgroundBlur($('bg-blur').value);
    });
  
    $('bg-brightness').addEventListener('input', (e) => {
      changeBackgroundBrightness($('bg-brightness').value);
    });
  
    $('upload_input').addEventListener('change', (e) => {
      if (e.target.files[0]) {
  
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = async (e) => {
          await cache.put("custom_background", reader.result);
          changeBackground('custom');
          removeBgBtnFocus();
          $('bg-custom').classList.add('checked');
          dataStore.filterBlur = 0;
          dataStore.filterBrightness = 0;
          $('bg-blur').value = dataStore.filterBlur * 10;
          $('bg-blur').style.backgroundSize = parseInt($('bg-blur').value) * 0.5 + "%";
          $('bg-brightness').value = dataStore.filterBrightness;
          setBackgroundFilter();
        };
        $('upload_input').value = "";
      }
    });
  
    resetBackgroundSettings();
  }
  
  function resetBackgroundSettings() {
    $('bg-blur').value = dataStore.filterBlur * 10;
    $('bg-blur').style.backgroundSize = parseInt($('bg-blur').value) * 0.5 + "%";
    $('bg-brightness').value = dataStore.filterBrightness;
    changeLinkMaxNumber(dataStore.customLinkMaxNum);
    setBackgroundFilter();
    removeBgBtnFocus();
    let bgBtns = document.querySelectorAll('#bg-list .grid-btn');
    for (let i = 0; i < bgBtns.length; i++) {
      const element = bgBtns.item(i);
      element.style.backgroundColor = element.dataset['value'];
      if (element.dataset['value'] == dataStore.background) {
        changeBackground(dataStore.background);
        element.classList.add('checked');
      }
    }
  }
  
  function changeBackgroundBlur(v) {
    dataStore.filterBlur = parseInt(v) * 0.1;
    $('bg-blur').value = dataStore.filterBlur * 10;
    $('bg-blur').style.backgroundSize = parseInt($('bg-blur').value) * 0.5 + "%";
    setBackgroundFilter();
  
  }
  
  function changeBackgroundBrightness(v) {
    dataStore.filterBrightness = v;
    $('bg-brightness').value = dataStore.filterBrightness;
    setBackgroundFilter();
  
  }
  
  function setBackgroundFilter() {
    $("background").style.filter = dataStore.bgFilter;
  }
  
  function changeLinkMaxNumber(n) {
    dataStore.customLinkMaxNum = n;
    let list = document.querySelectorAll("#linkMaxNums>.radio-button");
    for (let i = 0; i < list.length; i++) {
      list.item(i).classList.remove('checked');
    }
    document.querySelector('#linkMaxNums  .radio-button[data-value="' + n + '"]').classList.add('checked');
    refreshView();
    window.onresize();
    if (dataStore.customLinkMaxNum > 0) {
      showSite('site_wrapper');
      document.getElementsByClassName('tab-item').item(1).style.display = "block";
    } else {
      document.getElementsByClassName('tab-item').item(1).style.display = "none";
      showSite('site_wrapper_enterprise');
    }
  }
  
  async function changeBackground(bgValue) {
    if (!bgValue || bgValue == '') {
      return;
    }
    dataStore.background = bgValue;
    if (bgValue == 'custom') {
      // theme background
      const customBackground = await cache.get('custom_background');
      $('background').style.backgroundImage = "url('" + customBackground + "')";
    } else {
      // builtin background
      if (dataStore.background.startsWith('background')) {
        $('background').style.backgroundImage = "url('" + bgValue + "')";
      } else {
        // background color
        $('background').style.backgroundImage = "";
        $('background').style.backgroundColor = bgValue;
      }
    }
  }
  
  function removeBgBtnFocus() {
    const bgChecked = document.querySelectorAll('#bg-list .checked');
    for (let i = 0; i < bgChecked.length; i++) {
      bgChecked.item(i).classList.remove('checked');
    }
  }
  
  