import { useState } from "react";
import PageLayout from "./components/pageLayout";
import Card from "./components/card";
import Buttons from "./components/buttons";
import Modal from "./components/modal";
import "./App.css";

export default function App() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);

  return (
    <>
      {/* ==============================
          PageLayout wraps EVERYTHING
          navbar prop  = top bar
          children     = main content
          footer prop  = bottom bar
      ============================== */}
      <PageLayout
        navbar={
          <div className='navbar-inner'>
            <h1 className='logo'>NexDash</h1>
            <nav className='nav-links'>
              <a href='#'>Dashboard</a>
              <a href='#'>Projects</a>
              <a href='#'>Team</a>
            </nav>
          </div>
        }
        footer={<p className='footer-text'>© 2026 NexDash</p>}
      >
        <h2 className='page-title'>Good morning, Ryut 👋</h2>

        {/* ==============================
            Card used 3 times
            Same component, different children
        ============================== */}
        <div className='card-grid'>
          <Card title='Total Users'>
            <p className='stat'>24,521</p>
            <p className='change positive'>+12% this month</p>
          </Card>

          <Card title='Revenue'>
            <p className='stat'>$84,200</p>
            <p className='change positive'>+8% this month</p>
          </Card>

          <Card title='Support Tickets'>
            <p className='stat'>38</p>
            <p className='change negative'>-5% this month</p>
          </Card>
        </div>

        {/* ==============================
            Buttons — 3 different variants
            Same component, different look
        ============================== */}
        <div className='button-row'>
          <Buttons variant='primary' onClick={() => alert("Saved!")}>
            Save Changes
          </Buttons>
          <Buttons variant='success' onClick={() => setInviteModal(true)}>
            Invite Member
          </Buttons>
          <Buttons variant='danger' onClick={() => setDeleteModal(true)}>
            Delete Project
          </Buttons>
        </div>
      </PageLayout>

      {/* ==============================
          Delete Modal
          header prop  = top section
          children     = body content
          footer prop  = action buttons
      ============================== */}
      {deleteModal && (
        <Modal
          header={<h2>Delete Project ⚠️</h2>}
          footer={
            <>
              <Buttons variant='ghost' onClick={() => setDeleteModal(false)}>
                Cancel
              </Buttons>
              <Buttons
                variant='danger'
                onClick={() => {
                  alert("Deleted!");
                  setDeleteModal(false);
                }}
              >
                Yes, Delete
              </Buttons>
            </>
          }
        >
          <p>Are you sure you want to delete Project Alpha?</p>
          <p className='warning-text'>This action cannot be undone.</p>
        </Modal>
      )}

      {/* ==============================
          Invite Modal
          Same Modal component
          Completely different content inside
      ============================== */}
      {inviteModal && (
        <Modal
          header={<h2>Invite Team Member ✉️</h2>}
          footer={
            <>
              <Buttons variant='ghost' onClick={() => setInviteModal(false)}>
                Cancel
              </Buttons>
              <Buttons
                variant='success'
                onClick={() => {
                  alert("Invite sent!");
                  setInviteModal(false);
                }}
              >
                Send Invite
              </Buttons>
            </>
          }
        >
          <input className='input' placeholder='teammate@example.com' />
          <select className='input'>
            <option>Developer</option>
            <option>Designer</option>
            <option>Project Manager</option>
          </select>
        </Modal>
      )}
    </>
  );
}
