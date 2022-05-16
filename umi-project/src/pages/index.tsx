import React, { Fragment, useState, useEffect } from "react"
import styles from './index.less'
import { Tooltip, message } from 'antd'
import { CloseOutlined } from '@ant-design/icons'


const CalendarTable = () => {
  const [state, setState] = useState({
    data: {},
    candidateList: [],
    interviewDuration: '30',
    arrangeType: 2,
    periodId: 0,
    arrangedPeriods: [],
  })
  const { data, candidateList, interviewDuration, arrangeType, periodId, arrangedPeriods } = state

  const DayLen = 8
  const TimeLen = 13
  const curDStamp = new Date()
  const StartTime = 8
  const padding0 = (num) => {
    return num < 10 ? '0' + num : num
  }

  const dataObjMaker = () => {
    const data = {}
    for (let d = 0; d < DayLen; d++) {
      data[d] = {}
      for (let h = 0; h < TimeLen * 4 + 1; h++) {
        const minute = h % 4 === 0 ? '00' : h % 4 === 1 ? '15' : h % 4 === 2 ? '30' : '45'
        const dayValue = new Date(curDStamp + d * 24 * 60 * 60000)
        data[d][h] = {
          dayId: d,
          dayValue,
          timeId: h,
          timeValue: `${parseInt((h / 4).toString()) + StartTime}:${minute}`,
          detailTime: `${dayValue.getFullYear()}-${padding0(dayValue.getMonth() + 1)}-${padding0(
            dayValue.getDate(),
          )} ${padding0(parseInt((h / 4).toString()) + StartTime)}:${minute}:00`,
          checked: false,
          disabled: false,
          candidateInfo: null,
        }
      }
    }

    data[7][12].checked = true
    data[7][12].count = 4
    data[6][12].disabled = true
    data[6][12].count = 4
    // console.log(data)
    setState(preState => ({ ...preState, data }))
  }

  const getDayStart = (date, duration = 0) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + duration)
  }

  const timeTableTitleMaker = () => {
    const arr = []
    for (let i = 0; i < DayLen; i++) {
      arr.push({
        day: new Date(curDStamp.getTime() + i * 24 * 60 * 60000).getDate(),
        week: `周${new Date(curDStamp.getTime() + i * 24 * 60 * 60000).getDay()}`
      })
    }
    // console.log(arr)
    return arr
  }

  //时间表左侧时间点纵坐标---  8:00, 9:00, 10:00, 11:00 ... 20:00
  const timePointArrayMaker = () => {
    const arr = []
    for (let i = StartTime; i < StartTime + TimeLen; i++) {
      arr.push(`${i}:00`)
    }
    return arr
  }

  //时间表---选择、取消面试场次
  const handleClick = (type: string, time: timeCellType) => {
    console.log('time:', time)
    const { dayId, dayValue, timeId, timeValue, detailTime } = time
    if (dayId === 0 && parseInt(timeValue.split(':')[0]) < curD.getHours()) {
      // message.error('请选择当前时段之后的时间进行面试安排')
      // return
    }
    const setTimeInfo = (count: number) => {

      data[dayId][timeId].count = count
      data[dayId][timeId].period0 = `${dayValue.getFullYear()}-${dayValue.getMonth() + 1
        }-${dayValue.getDate()}`
      data[dayId][timeId].period = `${timeValue} - ${data[dayId][timeId + count].timeValue}`
      data[dayId][timeId].periodArr = [detailTime, data[dayId][timeId + count].detailTime]

      let candidateInfo = null
      if (arrangeType === 1 && candidateList.length !== 0) {
        candidateInfo = candidateList[0]
        candidateList.shift()
      }
      data[dayId][timeId].candidateName = arrangeType === 1 ? candidateInfo?.candidateName : ''
      data[dayId][timeId].candidateInfo = candidateInfo
      for (let i = 0; i < count; i++) {
        data[dayId][timeId + i].checked = true
        data[dayId][timeId + i].periodId = periodId + 1
      }
      arrangedPeriods.push(data[dayId][timeId])
      console.log(data, arrangedPeriods)
      setState((preState) => {
        return {
          ...preState,
          data,
          periodId: periodId + 1,
          arrangedPeriods,
          expire: '24',
        }
      })
    }

    if (type === 'on') {
      //待安排候选人列表为0时，不可选择场次
      if (candidateList.length === 0) {
        message.error('没有更多候选人需要安排了哦~')
        // return
      }
      const count = parseInt(interviewDuration) / 15
      if (count == 1) {
        setTimeInfo(count)
      } else if (count == 2) {
        if (
          timeId + 1 < TimeLen * 4 &&
          data[dayId][timeId + 1].checked == false &&
          data[dayId][timeId + 1].disabled == false
        ) {
          setTimeInfo(count)
        } else {
          message.error('没有足够的面试时间哦，请调整面试时长~')
        }
      } else if (count == 3) {
        if (
          timeId + 2 < TimeLen * 4 &&
          data[dayId][timeId + 1].checked == false &&
          data[dayId][timeId + 1].disabled == false &&
          data[dayId][timeId + 2].checked == false &&
          data[dayId][timeId + 2].disabled == false
        ) {
          setTimeInfo(count)
        } else {
          message.error('没有足够的面试时间哦，请调整面试时长~')
        }
      } else if (count == 4) {
        if (
          timeId + 3 < TimeLen * 4 &&
          data[dayId][timeId + 1].checked == false &&
          data[dayId][timeId + 1].disabled == false &&
          data[dayId][timeId + 2].checked == false &&
          data[dayId][timeId + 2].disabled == false &&
          data[dayId][timeId + 3].checked == false &&
          data[dayId][timeId + 3].disabled == false
        ) {
          setTimeInfo(count)
        } else {
          message.error('没有足够的面试时间哦，请调整面试时长~')
        }
      }
    } else {
      //取消已选场次
      data[dayId][timeId].count = 0
      data[dayId][timeId].period = ''
      data[dayId][timeId].periodArr = []
      const curPeriodId = data[time.dayId][time.timeId].periodId
      const newArrangedPeriods = [] as timeCellType[]
      arrangedPeriods.forEach((item) => {
        if (item.periodId !== curPeriodId) {
          newArrangedPeriods.push(item)
        }
      })
      for (let i = -3; i <= 3; i++) {
        if (
          data[time.dayId][time.timeId + i] &&
          data[time.dayId][time.timeId + i].periodId === curPeriodId
        ) {
          data[time.dayId][time.timeId + i].checked = false
          data[time.dayId][time.timeId + i].periodId = null
        }
      }
      const newCandidateList = [...candidateList]
      const candidateInfo = data[time.dayId][time.timeId].candidateInfo
      if (arrangeType === 1 && candidateInfo !== null) {
        newCandidateList.push(candidateInfo)
      }
      console.log("newArrangedPeriods:", newArrangedPeriods)
      setState((preState) => {
        return {
          ...preState,
          data,
          arrangedPeriods: newArrangedPeriods,
          candidateList: newCandidateList,
          expire: '24',
        }
      })
    }
  }

  useEffect(() => {
    dataObjMaker()
  }, [])

  return (<Fragment>
    <div className={styles.calendarTableDayTitle}>
      {timeTableTitleMaker().map(title => {
        return (
          <div className={styles.timeTableDay} key={title.day}>
            <span className={styles.timeTableDayNum}>{title.day}</span>
            <span className={styles.timeTableWeek}>{title.week}</span>
          </div>
        )
      })}
    </div>
    <div className={styles.timeTableMainWrapper}>
      <div className={styles.timeTableMain}>
        <div className={styles.timeTableColum1}>
          {timePointArrayMaker().map((timePoint, index) => {
            return (
              <div className={styles.timeTableRow} key={index}>
                {timePoint}
              </div>
            )
          })}
        </div>
        {Object.entries(data).map(([dk, day]) => {
          return (
            <div className={styles.timeTableColum} key={dk}>{Object.entries(day).map(([tk, time]) => {
              if (time.disabled) {
                return (
                  <div className={styles.timeTableRow} key={tk}>
                    {!time.count ? <span>{time.timeValue}</span> : (
                      <Tooltip
                        title={() => {
                          if (time.candidateName) {
                            return `${time.period} ${time.candidateName}`
                          } else {
                            return (
                              <div>
                                <div style={{ fontSize: '12px' }}>
                                  待确认候选人：{time.unConfirmedCandidates}
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  场次最晚释放时间：{time.latestConfirmTime}
                                </div>
                              </div>
                            )
                          }
                        }}
                        mouseEnterDelay={0.4}
                      >
                        <div
                          className={styles.timeTableRowDisabled}
                          style={{ height: `${time.count * 100 - 5}%` }}
                        >
                          {time.period} <br /> {time.candidateName || '已预约'}
                        </div>
                      </Tooltip>)}
                  </div>
                )
              } else {
                if (time.checked) {
                  return (<div className={styles.timeTableRow} key={tk}>
                    {!time.count ? (
                      <span>{time.timeValue}</span>
                    ) : (
                      <Tooltip
                        title={`${time.period} ${time.candidateName}`}
                        mouseEnterDelay={0.4}
                      >
                        <div
                          className={styles.timeTableRowChecked}
                          style={{ height: `${time.count * 100 - 5}%` }}
                        >
                          {time.period} <br /> {time.candidateName}
                          <CloseOutlined
                            className={styles.timeTableRowDelIcon}
                            onClick={() => {
                              handleClick('off', time)
                            }}
                          />
                        </div>
                      </Tooltip>
                    )}
                  </div>)
                } else {
                  return (
                    <div className={styles.timeTableRow} key={tk} onClick={() => {
                      handleClick('on', time)
                    }}>
                      {dk === '7' && parseInt(tk) % 4 === 0 && (
                        <span style={{ color: '#eee' }}>{time.timeValue}</span>
                      )}
                    </div>
                  )
                }
              }

            })}</div>
          )
        })}
      </div>
    </div>
  </Fragment>)
}

export default CalendarTable
