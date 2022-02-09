/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import Modal from '../components/Modal'
import styles from '../styles/Home.module.css'

/**
 * This is the Home Page
 * @return {JSX.Element}: The JSX Code for the Home Page
 */

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(true)
    console.log('%c handleModal ', 'background: red; color: white')
  }

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <button type="button" className="btn" onClick={handleModal}>
        Open Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
