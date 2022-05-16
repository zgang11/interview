import { useState } from 'react'
import styles  from './index.less';

const INIT_DATA = [
  { id: 1, name: '需求1' },
  { id: 2, name: '需求2' },
  { id: 3, name: '需求3' },
  { id: 4, name: '需求4' },
  { id: 5, name: '需求5' },
  { id: 6, name: '需求6' },
  { id: 7, name: '需求7' },
  { id: 8, name: '需求8' },
  { id: 9, name: '需求9' },
  { id: 10, name: '需求10' },
]

export default function index() {
  const [list, setList] = useState(INIT_DATA)
  const [curDragItem, setCurDragItem] = useState<any>({});
  let animationFlag = true;

  const dragStart = (e: any) => {
    setCurDragItem(JSON.parse(e.target.getAttribute('drag-data')));
  }

  const dragEnd = (e: any) => {
    setCurDragItem({});
  }

  const onDragOver = (e: any) => {
    console.log(e.target.getAttribute('drag-data'))
    e.preventDefault();
    let targetItem = JSON.parse(e?.target?.getAttribute('drag-data'));

    if (animationFlag && curDragItem.id && targetItem?.id && curDragItem.id !== targetItem?.id) {
      // animationFlag = false;
      // 获取当前拖拽节点最新的位置
      let curNewestDragItemDom: any = getDomItem(curDragItem.id);
      let curNewestDragItemDomRect: any =
        curNewestDragItemDom?.getBoundingClientRect() || {};
      const targetRect = e.target.getBoundingClientRect();
      // 动画
      e.target.style.transition = 'all 200ms';
      curNewestDragItemDom.style.transition = 'all 200ms';

      e.target.style.transform = `translate3d(${curNewestDragItemDomRect.left - targetRect.left
        }px,${curNewestDragItemDomRect.top - targetRect.top}px,0)`;
      curNewestDragItemDom.style.transform = `translate3d(${targetRect.left - curNewestDragItemDomRect.left
        }px,${targetRect.top - curNewestDragItemDomRect.top}px,0)`;

      setTimeout(() => {
        //排序
        sortPosition(curDragItem.id, targetItem.id);
      }, 200);
    }
  }

  // 获取指定id的组件元素
  const getDomItem = (id: any) => {
    return document.getElementsByName('item_' + id)?.[0] || {};
  };

  // 元素换位置
  const sortPosition = (sourceId: any, targetId: any) => {
    if (sourceId && targetId && targetId !== sourceId) {
      // 真正的节点交换顺序
      let tmpList = JSON.parse(JSON.stringify(list))
      let sourceItem = tmpList.find((val: any) => val.id == sourceId);
      let sourceItemIndex = tmpList.findIndex((val: any) => val.id == sourceId);
      let targetItem = tmpList.find((val: any) => val.id == targetId);
      let targetItemIndex = tmpList.findIndex((val: any) => val.id == targetId);
      tmpList.splice(sourceItemIndex, 1, targetItem);
      tmpList.splice(targetItemIndex, 1, sourceItem);
      setList(tmpList);

      // 清除动画及位移
      let sourceDom = getDomItem(sourceId);
      let targetDom = getDomItem(targetId);
      sourceDom.style.transition = '';
      sourceDom.style.transform = '';
      targetDom.style.transition = '';
      targetDom.style.transform = '';

      // 允许下次交换
    //   animationFlag = true;
    }
  }

  const onDrop =(e: any) => {
    console.log(e.target.getAttribute('drag-data'))
    e.preventDefault();
    let targetItem = JSON.parse(e?.target?.getAttribute('drag-data'));
    let targetId = targetItem.id
    let sourceId = curDragItem.id
    setTimeout(() => {
      //排序
      if (sourceId && targetId && targetId !== sourceId) {
        // 真正的节点交换顺序
        let tmpList = JSON.parse(JSON.stringify(list))
        let sourceItem = tmpList.find((val: any) => val.id == sourceId);
        let sourceItemIndex = tmpList.findIndex((val: any) => val.id == sourceId);
        let targetItem = tmpList.find((val: any) => val.id == targetId);
        let targetItemIndex = tmpList.findIndex((val: any) => val.id == targetId);
        tmpList.splice(sourceItemIndex, 1, targetItem);
        tmpList.splice(targetItemIndex, 1, sourceItem);
        setList(tmpList);
  
        // 清除动画及位移
        let sourceDom = getDomItem(sourceId);
        let targetDom = getDomItem(targetId);
        sourceDom.style.transition = '';
        sourceDom.style.transform = '';
        targetDom.style.transition = '';
        targetDom.style.transform = '';
  
        // 允许下次交换
      //   animationFlag = true;
      }
    }, 200);
  }

  return (
    <div className={styles.wrap}>
      <ul
        className={styles.list}
        onDragOver={onDragOver}
        // onDrop={onDrop}
      >
        {
          list.map((val: any) => {
            return (
              <li
                key={val.id}
                name={'item_' + val.id}
                className={styles.item}
                draggable={true}
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                drag-data={JSON.stringify(val)}
              >
                {val.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

