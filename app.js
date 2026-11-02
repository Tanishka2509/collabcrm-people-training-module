// ==========================================================================
// CollabCRM People & Training Module Application Logic
// Supports 2 User Roles:
// 1. Admin / HR / Reporting Manager (Isha Patel)
// 2. Employee (Rihan R.)
// ==========================================================================

let currentRole = 'admin'; // 'admin' | 'employee'

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSidebar();
  initAttendanceScope();
  initClockWidget();
  initTrainingModule();
  initEmployeeTabs();
  setAppRole('admin'); // default to Admin / HR / RM
});

// Role Switcher Management
function setAppRole(role) {
  currentRole = role;

  const btnAdmin = document.getElementById('btnRoleAdmin');
  const btnEmployee = document.getElementById('btnRoleEmployee');
  const headerAvatar = document.getElementById('headerUserAvatar');
  const headerName = document.getElementById('headerUserName');
  const headerRole = document.getElementById('headerUserRole');
  const greetingName = document.getElementById('greetingNameDisplay');
  const greetingRole = document.getElementById('greetingRoleDisplay');
  const feedCommentAvatar = document.getElementById('feedCommentAvatar');

  // Training Module Role Elements
  const adminHeaderActions = document.getElementById('adminHeaderActions');
  const employeeHeaderActions = document.getElementById('employeeHeaderActions');
  const adminKpiRow = document.getElementById('adminKpiRow');
  const employeeKpiRow = document.getElementById('employeeKpiRow');
  const adminContentCard = document.getElementById('adminContentCard');
  const employeeContentCard = document.getElementById('employeeContentCard');
  const trainingHeading = document.getElementById('trainingHeading');
  const trainingSubHeading = document.getElementById('trainingSubHeading');

  // Dashboard Stats Elements
  const attendanceTitle = document.getElementById('attendanceCardTitle');
  const kpiCheckedIn = document.getElementById('kpiCheckedInVal');
  const kpiPresentlyIn = document.getElementById('kpiPresentlyInVal');
  const kpiPresentlyOut = document.getElementById('kpiPresentlyOutVal');
  const chartTitle = document.getElementById('employeesChartTitle');
  const donutCenterCount = document.getElementById('donutCenterCount');
  const donutCenterSub = document.getElementById('donutCenterSub');

  if (role === 'admin') {
    // Buttons state
    if (btnAdmin) btnAdmin.classList.add('active');
    if (btnEmployee) btnEmployee.classList.remove('active');

    // Header Profile
    if (headerAvatar) headerAvatar.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120';
    if (headerName) headerName.textContent = 'Isha Patel';
    if (headerRole) headerRole.textContent = 'Admin / HR / RM';
    if (feedCommentAvatar) feedCommentAvatar.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120';

    // Greeting
    if (greetingName) greetingName.textContent = 'Hello, Isha Patel';
    if (greetingRole) greetingRole.textContent = 'Good Afternoon • HR & People Operations';

    // Dashboard Organization Stats
    if (attendanceTitle) attendanceTitle.textContent = 'Organization Attendance';
    if (kpiCheckedIn) kpiCheckedIn.innerHTML = '<span class="val-active">1</span> <span class="val-total">/156</span>';
    if (kpiPresentlyIn) kpiPresentlyIn.innerHTML = '<span class="val-active">1</span> <span class="val-total">/1</span>';
    if (kpiPresentlyOut) kpiPresentlyOut.innerHTML = '<span class="val-active">0</span> <span class="val-total">/1</span>';
    if (chartTitle) chartTitle.textContent = 'Employees';
    if (donutCenterCount) donutCenterCount.textContent = '156';
    if (donutCenterSub) donutCenterSub.textContent = 'Total Employees';

    // Training Module Admin View
    if (trainingHeading) trainingHeading.textContent = 'Training & Skill Development';
    if (trainingSubHeading) trainingSubHeading.textContent = 'Manage employee learning paths, courses, assessments, and certifications across all business units.';
    if (adminHeaderActions) adminHeaderActions.style.display = 'block';
    if (employeeHeaderActions) employeeHeaderActions.style.display = 'none';
    if (adminKpiRow) adminKpiRow.style.display = 'grid';
    if (employeeKpiRow) employeeKpiRow.style.display = 'none';
    if (adminContentCard) adminContentCard.style.display = 'block';
    if (employeeContentCard) employeeContentCard.style.display = 'none';

  } else {
    // Buttons state
    if (btnAdmin) btnAdmin.classList.remove('active');
    if (btnEmployee) btnEmployee.classList.add('active');

    // Header Profile
    if (headerAvatar) headerAvatar.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120';
    if (headerName) headerName.textContent = 'Rihan R.';
    if (headerRole) headerRole.textContent = 'Employee (Eng)';
    if (feedCommentAvatar) feedCommentAvatar.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120';

    // Greeting
    if (greetingName) greetingName.textContent = 'Hello, Rihan R.';
    if (greetingRole) greetingRole.textContent = 'Good Afternoon • Software Engineering';

    // Dashboard Personal Stats
    if (attendanceTitle) attendanceTitle.textContent = 'My Attendance & Work Status';
    if (kpiCheckedIn) kpiCheckedIn.innerHTML = '<span class="val-active">1</span> <span class="val-total">/1 (Today)</span>';
    if (kpiPresentlyIn) kpiPresentlyIn.innerHTML = '<span class="val-active">1</span> <span class="val-total">/1 (On Duty)</span>';
    if (kpiPresentlyOut) kpiPresentlyOut.innerHTML = '<span class="val-active">0</span> <span class="val-total">/0</span>';
    if (chartTitle) chartTitle.textContent = 'Department Breakdown';
    if (donutCenterCount) donutCenterCount.textContent = '34';
    if (donutCenterSub) donutCenterSub.textContent = 'Engineering Team';

    // Training Module Employee View
    if (trainingHeading) trainingHeading.textContent = 'My Learning & Training Hub';
    if (trainingSubHeading) trainingSubHeading.textContent = 'Access your enrolled programs, complete mandatory compliance courses, and download certificates.';
    if (adminHeaderActions) adminHeaderActions.style.display = 'none';
    if (employeeHeaderActions) employeeHeaderActions.style.display = 'block';
    if (adminKpiRow) adminKpiRow.style.display = 'none';
    if (employeeKpiRow) employeeKpiRow.style.display = 'grid';
    if (adminContentCard) adminContentCard.style.display = 'none';
    if (employeeContentCard) employeeContentCard.style.display = 'block';
  }
}

window.setAppRole = setAppRole;

function toggleRoleQuickMenu() {
  const nextRole = currentRole === 'admin' ? 'employee' : 'admin';
  setAppRole(nextRole);
}

window.toggleRoleQuickMenu = toggleRoleQuickMenu;

// Navigation Handling (Dashboard <-> Training Module)
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = item.getAttribute('data-tab');
      
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      if (tab === 'training') {
        switchView('training');
      } else if (tab === 'dashboard') {
        switchView('dashboard');
      } else {
        switchView('dashboard');
      }
    });
  });
}

function switchView(viewName) {
  const dashboardView = document.getElementById('viewDashboard');
  const trainingView = document.getElementById('viewTraining');
  const navDashboard = document.getElementById('navDashboard');
  const navTraining = document.getElementById('navTraining');

  if (viewName === 'training') {
    dashboardView.classList.remove('active');
    trainingView.classList.add('active');
    if (navDashboard) navDashboard.classList.remove('active');
    if (navTraining) navTraining.classList.add('active');
  } else {
    trainingView.classList.remove('active');
    dashboardView.classList.add('active');
    if (navTraining) navTraining.classList.remove('active');
    if (navDashboard) navDashboard.classList.add('active');
  }
}

window.switchView = switchView;

// Sidebar Collapse / Expand Toggle
function initSidebar() {
  const collapseBtn = document.getElementById('collapseSidebarBtn');
  const sidebar = document.getElementById('sidebarNav');

  if (collapseBtn && sidebar) {
    collapseBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
}

// Attendance Scope Toggle (Team vs Org)
function initAttendanceScope() {
  const scopeBtns = document.querySelectorAll('.scope-btn');
  const checkedInVal = document.querySelector('.kpi-mini-card:nth-child(1) .kpi-mini-value');
  const presentlyInVal = document.querySelector('.kpi-mini-card:nth-child(2) .kpi-mini-value');
  const presentlyOutVal = document.querySelector('.kpi-mini-card:nth-child(3) .kpi-mini-value');

  scopeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scopeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const scope = btn.getAttribute('data-scope');
      if (scope === 'team') {
        if (checkedInVal) checkedInVal.innerHTML = '<span class="val-active">1</span> <span class="val-total">/12</span>';
        if (presentlyInVal) presentlyInVal.innerHTML = '<span class="val-active">1</span> <span class="val-total">/1</span>';
        if (presentlyOutVal) presentlyOutVal.innerHTML = '<span class="val-active">0</span> <span class="val-total">/1</span>';
      } else {
        if (checkedInVal) checkedInVal.innerHTML = '<span class="val-active">1</span> <span class="val-total">/156</span>';
        if (presentlyInVal) presentlyInVal.innerHTML = '<span class="val-active">1</span> <span class="val-total">/1</span>';
        if (presentlyOutVal) presentlyOutVal.innerHTML = '<span class="val-active">0</span> <span class="val-total">/1</span>';
      }
    });
  });
}

// Clock In / Out Logic
let isClockedIn = true;
function toggleClockStatus() {
  const btn = document.getElementById('btnClockOut');
  const outTime = document.getElementById('todayOutTime');
  const inTime = document.getElementById('todayInTime');

  if (isClockedIn) {
    const now = new Date();
    const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    outTime.textContent = formatted;
    btn.textContent = 'Clock In';
    btn.classList.remove('btn-clock-out');
    btn.classList.add('btn-clock-in');
    isClockedIn = false;
  } else {
    const now = new Date();
    const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    inTime.textContent = formatted;
    outTime.textContent = 'N/A';
    btn.textContent = 'Clock Out';
    btn.classList.remove('btn-clock-in');
    btn.classList.add('btn-clock-out');
    isClockedIn = true;
  }
}

window.toggleClockStatus = toggleClockStatus;

function refreshClockTime() {
  const gross = document.getElementById('todayGross');
  const effective = document.getElementById('todayEffective');
  if (gross && effective) {
    gross.textContent = '03h 36m';
    effective.textContent = '03h 36m';
  }
}

window.refreshClockTime = refreshClockTime;

// Today's Events Accordion Toggle
function toggleAccordion(header) {
  header.classList.toggle('active');
  const body = header.nextElementSibling;
  if (body) {
    body.style.display = header.classList.contains('active') ? 'block' : 'none';
  }
}

window.toggleAccordion = toggleAccordion;

// Feed Reactions & Comments
function toggleReaction(btn) {
  btn.classList.toggle('liked');
  const card = btn.closest('.feed-card');
  const counter = card.querySelector('.like-counter');
  counter.textContent = btn.classList.contains('liked') ? '👍 1' : '👍 0';
}

window.toggleReaction = toggleReaction;

function focusComment(btn) {
  const card = btn.closest('.feed-card');
  const input = card.querySelector('.comment-field');
  if (input) input.focus();
}

window.focusComment = focusComment;

function handleCommentSubmit(e, input) {
  if (e.key === 'Enter' && input.value.trim() !== '') {
    const text = input.value.trim();
    const card = input.closest('.feed-card');
    const authorName = currentRole === 'admin' ? 'Isha Patel' : 'Rihan R.';
    
    const commentItem = document.createElement('div');
    commentItem.style.cssText = 'display:flex; align-items:center; gap:8px; font-size:11.5px; background:#f8fafc; padding:6px 10px; border-radius:6px; margin-top:6px; border:1px solid #edf2f7;';
    commentItem.innerHTML = `<strong>${authorName}:</strong> <span>${escapeHtml(text)}</span>`;
    
    card.insertBefore(commentItem, input.parentElement);
    input.value = '';
  }
}

window.handleCommentSubmit = handleCommentSubmit;

function createNewPost() {
  const text = prompt('Share an update with your organization:');
  if (text && text.trim()) {
    const feedStream = document.getElementById('feedStream');
    const authorName = currentRole === 'admin' ? 'Isha Patel' : 'Rihan R.';
    const avatar = currentRole === 'admin' 
      ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120'
      : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120';
    
    const newCard = document.createElement('article');
    newCard.className = 'feed-card';
    newCard.innerHTML = `
      <div class="feed-card-header">
        <img src="${avatar}" class="comment-user-avatar" style="width:28px; height:28px;" />
        <div class="feed-author-meta">
          <div class="feed-author-name">${authorName}</div>
          <div class="feed-timestamp">Just now</div>
        </div>
      </div>
      <div class="feed-card-body">
        <p class="feed-message">${escapeHtml(text)}</p>
      </div>
      <div class="feed-card-footer">
        <button class="feed-reaction-btn" onclick="toggleReaction(this)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
          <span>Like</span>
        </button>
        <button class="feed-reaction-btn" onclick="focusComment(this)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <span>Comment</span>
        </button>
        <div class="feed-reaction-stats">
          <span class="like-counter">👍 0</span>
        </div>
      </div>
      <div class="comment-input-box">
        <img src="${avatar}" class="comment-user-avatar" />
        <input type="text" class="comment-field" placeholder="Write a comment" onkeydown="handleCommentSubmit(event, this)" />
      </div>
    `;
    feedStream.insertBefore(newCard, feedStream.firstChild);
  }
}

window.createNewPost = createNewPost;

// Training Module Admin Filter Logic
function initTrainingModule() {
  const tabs = document.querySelectorAll('#adminContentCard .training-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterTrainingPrograms();
    });
  });
}

function initEmployeeTabs() {
  const empTabs = document.querySelectorAll('#employeeContentCard .training-tab-btn');
  empTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      empTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function filterTrainingPrograms() {
  const query = (document.getElementById('trainingSearchInput')?.value || '').toLowerCase();
  const dept = document.getElementById('departmentFilter')?.value || 'all';
  const cards = document.querySelectorAll('#programsGrid .program-card');

  cards.forEach(card => {
    const title = card.querySelector('.program-title')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('.program-desc')?.textContent.toLowerCase() || '';
    const category = card.getAttribute('data-category') || '';

    const matchesSearch = title.includes(query) || desc.includes(query);
    const matchesDept = dept === 'all' || category === dept;

    card.style.display = (matchesSearch && matchesDept) ? 'flex' : 'none';
  });
}

window.filterTrainingPrograms = filterTrainingPrograms;

// Admin Modal: Create New Training Program
function openNewProgramModal() {
  const modal = document.getElementById('newProgramModal');
  if (modal) modal.classList.add('open');
}

function closeNewProgramModal() {
  const modal = document.getElementById('newProgramModal');
  if (modal) modal.classList.remove('open');
}

function submitNewProgram() {
  const title = document.getElementById('newProgTitle')?.value.trim();
  const dept = document.getElementById('newProgDept')?.value || 'engineering';
  const hours = document.getElementById('newProgHours')?.value || '16';
  const trainer = document.getElementById('newProgTrainer')?.value.trim() || 'Isha Patel';
  const desc = document.getElementById('newProgDesc')?.value.trim() || 'Comprehensive skill development program tailored for organizational excellence.';

  if (!title) {
    alert('Please enter a program title.');
    return;
  }

  const grid = document.getElementById('programsGrid');
  const card = document.createElement('div');
  card.className = 'program-card';
  card.setAttribute('data-category', dept);

  const deptLabel = dept === 'recruitment' ? 'Recruitment & HR' : (dept === 'engineering' ? 'Engineering' : 'Operations');
  const deptBadgeClass = dept === 'recruitment' ? 'badge-purple' : (dept === 'engineering' ? 'badge-blue' : 'badge-emerald');
  const initials = trainer.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'TR';

  card.innerHTML = `
    <div class="program-card-top">
      <span class="badge-dept ${deptBadgeClass}">${deptLabel}</span>
      <span class="badge-status badge-status-ongoing">Active</span>
    </div>
    <h3 class="program-title">${escapeHtml(title)}</h3>
    <p class="program-desc">${escapeHtml(desc)}</p>
    <div class="program-meta-chips">
      <span class="meta-chip">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        ${hours} hrs
      </span>
      <span class="meta-chip">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
        0 Enrolled
      </span>
    </div>
    <div class="progress-section">
      <div class="progress-label-row">
        <span>Cohort Progress</span>
        <span class="progress-percent">0%</span>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill bg-blue" style="width: 0%;"></div>
      </div>
    </div>
    <div class="program-footer">
      <div class="trainer-avatar-group">
        <div class="trainer-avatar bg-amber">${initials}</div>
        <span class="trainer-name">Lead: ${escapeHtml(trainer)}</span>
      </div>
      <div class="program-btn-group">
        <button class="btn-sm-primary" onclick="openAssignModal('${escapeHtml(title)}')">Assign</button>
        <button class="btn-sm-outline" onclick="openTraineeRosterModal('${escapeHtml(title)}')">Manage</button>
      </div>
    </div>
  `;

  grid.insertBefore(card, grid.firstChild);
  closeNewProgramModal();
  document.getElementById('newProgTitle').value = '';
  document.getElementById('newProgDesc').value = '';
}

window.openNewProgramModal = openNewProgramModal;
window.closeNewProgramModal = closeNewProgramModal;
window.submitNewProgram = submitNewProgram;

// Admin Modal: Assign Trainees
function openAssignModal(courseTitle) {
  const modal = document.getElementById('assignModal');
  const title = document.getElementById('assignModalTitle');
  if (title) title.textContent = `Assign Employees to "${courseTitle}"`;
  if (modal) modal.classList.add('open');
}

function closeAssignModal() {
  const modal = document.getElementById('assignModal');
  if (modal) modal.classList.remove('open');
}

function confirmAssignTrainees() {
  alert('Selected employees have been assigned and notified via email/Slack!');
  closeAssignModal();
}

window.openAssignModal = openAssignModal;
window.closeAssignModal = closeAssignModal;
window.confirmAssignTrainees = confirmAssignTrainees;

// Admin Modal: Trainee Roster
function openTraineeRosterModal() {
  const modal = document.getElementById('rosterModal');
  if (modal) modal.classList.add('open');
}

function closeRosterModal() {
  const modal = document.getElementById('rosterModal');
  if (modal) modal.classList.remove('open');
}

window.openTraineeRosterModal = openTraineeRosterModal;
window.closeRosterModal = closeRosterModal;

// Employee Modal: Course Player
function openCoursePlayer(courseTitle, currentProgress) {
  const modal = document.getElementById('playerModal');
  const title = document.getElementById('playerCourseTitle');
  if (title) title.textContent = courseTitle;
  if (modal) modal.classList.add('open');
}

function closeCoursePlayer() {
  const modal = document.getElementById('playerModal');
  if (modal) modal.classList.remove('open');
}

function completeCurrentLesson() {
  alert('Lesson marked complete! Your progress has updated to 85%.');
  closeCoursePlayer();
}

window.openCoursePlayer = openCoursePlayer;
window.closeCoursePlayer = closeCoursePlayer;
window.completeCurrentLesson = completeCurrentLesson;

// Employee Modal: Certificate Viewer
function openCertificateModal(courseName, recipientName, date) {
  const modal = document.getElementById('certificateModal');
  const certCourse = document.getElementById('certCourse');
  const certRecipient = document.getElementById('certRecipient');
  const certDate = document.getElementById('certDate');

  if (certCourse) certCourse.textContent = courseName;
  if (certRecipient) certRecipient.textContent = recipientName || 'Rihan R.';
  if (certDate) certDate.textContent = `Date: ${date || '24-Oct-2026'}`;

  if (modal) modal.classList.add('open');
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');
  if (modal) modal.classList.remove('open');
}

window.openCertificateModal = openCertificateModal;
window.closeCertificateModal = closeCertificateModal;

// Employee Modal: Request Training
function openRequestTrainingModal() {
  const modal = document.getElementById('requestModal');
  if (modal) modal.classList.add('open');
}

function closeRequestTrainingModal() {
  const modal = document.getElementById('requestModal');
  if (modal) modal.classList.remove('open');
}

function submitTrainingRequest() {
  const topic = document.getElementById('reqCourseTitle')?.value.trim();
  if (!topic) {
    alert('Please enter a course topic.');
    return;
  }
  alert(`Training request for "${topic}" submitted to HR / Reporting Manager!`);
  closeRequestTrainingModal();
  document.getElementById('reqCourseTitle').value = '';
  document.getElementById('reqJustification').value = '';
}

window.openRequestTrainingModal = openRequestTrainingModal;
window.closeRequestTrainingModal = closeRequestTrainingModal;
window.submitTrainingRequest = submitTrainingRequest;

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
