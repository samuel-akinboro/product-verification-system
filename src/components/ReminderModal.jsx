import React from 'react'
import './components-styles/ReminderModal.css'
import CloseIcon from '@material-ui/icons/Close';
import {motion} from 'framer-motion'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import alarmAudio from '../assets/audio/mild_alarm.mp3'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

function ReminderModal({handleClick}) {

  return (
    <div className="reminder__modal">
      <motion.div className="reminder__modal__container rounded-lg" animate={{scale: [1, 1.4, 1, 1.2, 1]}}>
        <CloseIcon style={{
          cursor: "pointer",
          marginBottom: "1em"
        }} onClick={handleClick} />
        <div className="box">
          <h1>Reminder !!!</h1>
          <motion.div
            animate={{rotate: ["30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg", "30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg", "30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg", "30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg","30deg", "33deg", "30deg", "-33deg", "0deg"]}}
            transition={{ repeat: Infinity, repeatDelay: 0.8, duration: 3.5 }}
          >
            <AccessAlarmIcon />
          </motion.div>
          <p className="bg-yellow-200 py-4 mt-4">
            <span className="mr-2">
              12:30
            </span>
            <span>
              2021-20-23
            </span>
            </p>
          <p className="mt-4">
            this is the reminder message
          </p>
        </div>
        <div className="others">
          <h2 className="mt-2 text-xl font-bold mb-2">Past Reminders</h2>
          <p className="bg-red-200 py-4 rounded-lg relative mb-2 text-lg">
            message <span className="text-xs font-bold">2013-12-28</span>
            <IndeterminateCheckBoxIcon />
          </p>
          <p className="bg-red-200 py-4 rounded-lg relative">
            message <span>2013</span>
            <IndeterminateCheckBoxIcon />
          </p>
        </div>
        <audio autoPlay={true} loop>
          <source src={alarmAudio}></source>
        </audio>
      </motion.div>
    </div>
  )
}

export default ReminderModal
