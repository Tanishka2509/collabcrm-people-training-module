import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || process.argv[2] || '3000', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// =============================================================================
// BACKEND IN-MEMORY TRAINING DATABASE FOR EMPLOYEES
// =============================================================================
const EMPLOYEE_TRAINING_STORE = {
  'CO-5039': {
    profile: {
      id: 'CO-5039',
      name: 'Tanya Kapoor',
      firstName: 'Tanya',
      lastName: 'Kapoor',
      designation: 'Business analyst',
      department: 'Business analyst',
      reportingManager: 'Megha Salunkhe (Sr. Executive)',
      reportingManagerId: 'CO-5038',
      email: 'calebnguyen@maildrop.cc',
      phone: '+1 9005048244',
      avatarInitials: 'AB',
      avatarBg: '#f59e0b',
      experience: '3Y 11M',
      status: 'active'
    },
    notifications: [
      {
        id: 'notif_1',
        title: 'Training Due Soon',
        message: 'Your mandatory training "API Security & OAuth2 Best Practices" is due on 15-Mar-2026.',
        type: 'warning',
        timestamp: '02-Mar-2026, 09:30 AM',
        trainingId: 'TRN-ASSIGN-101',
        read: false
      },
      {
        id: 'notif_2',
        title: 'Changes Requested on Submission',
        message: 'Reviewer Kunal Barve requested revisions for "CollabCRM Platform Architecture Deep Dive".',
        type: 'amber',
        timestamp: '28-Feb-2026, 11:45 AM',
        trainingId: 'TRN-ASSIGN-103',
        read: false
      },
      {
        id: 'notif_3',
        title: 'Certificate Issued',
        message: 'Congratulations! Certificate TRN-2026-0003 for "Security Awareness & GDPR Compliance 2026" has been issued.',
        type: 'success',
        timestamp: '26-Jan-2026, 05:15 PM',
        trainingId: 'TRN-ASSIGN-102',
        certId: 'TRN-2026-0003',
        read: true
      }
    ],
    trainings: [
  {
    "id": "TRN-ASSIGN-101",
    "trainingName": "API Security & OAuth2 Best Practices",
    "category": "Technical Architecture",
    "shortDescription": "Master token-based authentication, RBAC scopes, OAuth2 grant types, and API rate limiting in CollabCRM architecture.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "12-Jan-2026",
    "dueDate": "15-Mar-2026",
    "startDate": "15-Jan-2026",
    "completionPercentage": 67,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Understand OAuth2 authorization code and client credentials grant mechanisms",
      "Implement cryptographically verified JSON Web Token (JWT) validation and RBAC claims",
      "Prevent OWASP Top 10 API threats including Broken Object Level Authorization (BOLA)",
      "Configure distributed sliding-window rate limiting algorithms on mission-critical CRM gateways"
    ],
    "expectedOutcomes": "Engineers will be capable of authoring and auditing secure zero-trust APIs, safeguarding CRM customer data, and adhering to strict platform access policies.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-101_r1",
        "title": "Module 1: Foundations & Core Principles of API Security & OAuth2 Best Practices",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "15-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-101_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-101_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-101_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-101",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-101_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-101_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-101_asm",
      "name": "API Security & OAuth2 Best Practices Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "15-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of API Security & OAuth2 Best Practices?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-102",
    "trainingName": "Data Protection, GDPR & Employee Privacy 2026",
    "category": "Governance & Compliance",
    "shortDescription": "Comprehensive training on EU GDPR regulations, CCPA data rights, PII handling, employee consent frameworks, and breach response.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "05-Jan-2026",
    "dueDate": "20-Feb-2026",
    "startDate": "08-Jan-2026",
    "completionDate": "26-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "3 Hours",
    "learningObjectives": [
      "Identify Personally Identifiable Information (PII) across customer and employee databases",
      "Execute GDPR Subject Access Requests (SAR) and Right to Erasure procedures",
      "Maintain Data Protection Impact Assessments (DPIA) for high-risk data workflows",
      "Implement incident containment protocols within the mandatory 72-hour notification window"
    ],
    "expectedOutcomes": "Staff demonstrate thorough comprehension of data subject rights and privacy protection obligations across all software interfaces.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-102_r1",
        "title": "Module 1: Foundations & Core Principles of Data Protection, GDPR & Employee Privacy 2026",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-102_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-102_playbook.pdf",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-102_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-102",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-102_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-102_demo.mp4",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-102_asm",
      "name": "Data Protection, GDPR & Employee Privacy 2026 Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "26-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Data Protection, GDPR & Employee Privacy 2026?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-102.pdf"
      ],
      "submittedAt": "26-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Isha Patel",
      "reviewDate": "26-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0002",
      "name": "Data Protection, GDPR & Employee Privacy 2026 Credential",
      "trainingName": "Data Protection, GDPR & Employee Privacy 2026",
      "issueDate": "26-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-103",
    "trainingName": "CollabCRM Platform Architecture & Microservices",
    "category": "Product & Platform",
    "shortDescription": "Deep dive into internal service communication, message brokers, caching tiers, and resilient microservice design.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "18-Jan-2026",
    "dueDate": "28-Feb-2026",
    "startDate": "20-Jan-2026",
    "completionPercentage": 45,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "6 Hours",
    "learningObjectives": [
      "Deconstruct CollabCRM event-driven pub/sub architecture using RabbitMQ/Kafka",
      "Implement circuit breakers, retries, and exponential backoff in inter-service gRPC calls",
      "Analyze telemetry traces, distributed spans, and OpenTelemetry instrumentation",
      "Manage multi-tenant schema partitioning and cross-database referential integrity"
    ],
    "expectedOutcomes": "Architects and engineers build scalable, fault-tolerant business features aligned with enterprise system architecture.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-103_r1",
        "title": "Module 1: Foundations & Core Principles of CollabCRM Platform Architecture & Microservices",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "20-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-103_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-103_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-103_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-103",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-103_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-103_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-103_asm",
      "name": "CollabCRM Platform Architecture & Microservices Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "20-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of CollabCRM Platform Architecture & Microservices?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-104",
    "trainingName": "Enterprise Information Security & Phishing Defense",
    "category": "Governance & Compliance",
    "shortDescription": "Mandatory annual cybersecurity defense course covering spear-phishing, social engineering, credential hygiene, and MFA verification.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "10-Dec-2025",
    "dueDate": "15-Jan-2026",
    "startDate": "12-Dec-2025",
    "completionPercentage": 20,
    "trainingStatus": "overdue",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Identify sophisticated spear-phishing emails, spoofed headers, and fraudulent domains",
      "Enforce hardware FIDO2/WebAuthn MFA tokens across all operational workstation logins",
      "Safely report suspected security threats through internal SecOps dispatch pipelines",
      "Adhere to clean-desk, screen-locking, and physical badge access requirements"
    ],
    "expectedOutcomes": "Employees act as a vigilant first line of cyber defense to eliminate unauthorized intrusions and corporate data breaches.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-104_r1",
        "title": "Module 1: Foundations & Core Principles of Enterprise Information Security & Phishing Defense",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-104_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-104_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-104_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-104",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-104_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-104_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-104_asm",
      "name": "Enterprise Information Security & Phishing Defense Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Enterprise Information Security & Phishing Defense?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-105",
    "trainingName": "Cloud Native DevOps & CI/CD Pipelines",
    "category": "Technical Architecture",
    "shortDescription": "Automated continuous integration, deployment gates, trunk-based development, and blue-green rollouts on Kubernetes.",
    "isMandatory": false,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "25-Jan-2026",
    "dueDate": "30-Apr-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "5 Hours",
    "learningObjectives": [
      "Configure automated Docker multi-stage container builds with vulnerability image scanning",
      "Design GitHub Actions workflows with ephemeral test environments and preview deployments",
      "Execute automated canary analysis and zero-downtime rolling service upgrades",
      "Define Terraform Infrastructure-as-Code modules for cloud resource provisioning"
    ],
    "expectedOutcomes": "Engineers achieve frictionless code-to-production workflows while adhering to automated quality and security checks.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-105_r1",
        "title": "Module 1: Foundations & Core Principles of Cloud Native DevOps & CI/CD Pipelines",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-105_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-105_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-105_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-105",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-105_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-105_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-105_asm",
      "name": "Cloud Native DevOps & CI/CD Pipelines Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Cloud Native DevOps & CI/CD Pipelines?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-106",
    "trainingName": "Client Onboarding & Requirement Intake Playbook",
    "category": "Support & Operations",
    "shortDescription": "Standard operating procedures for managing high-touch client onboarding, technical intake workshops, and CRM data migrations.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "02-Jan-2026",
    "dueDate": "10-Feb-2026",
    "startDate": "04-Jan-2026",
    "completionDate": "28-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Facilitate structured stakeholder discovery workshops and requirement documentation",
      "Map legacy CRM customer records to CollabCRM entity models with zero data truncation",
      "Establish client success milestones, SLA governance, and executive sign-off criteria",
      "Execute mock migration dry-runs to ensure data validation passes with 100% fidelity"
    ],
    "expectedOutcomes": "Support leads onboard enterprise clients smoothly with rapid time-to-value and reduced kickoff friction.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-106_r1",
        "title": "Module 1: Foundations & Core Principles of Client Onboarding & Requirement Intake Playbook",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-106_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-106_playbook.pdf",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-106_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-106",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-106_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-106_demo.mp4",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-106_asm",
      "name": "Client Onboarding & Requirement Intake Playbook Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "28-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Client Onboarding & Requirement Intake Playbook?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-106.pdf"
      ],
      "submittedAt": "28-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": "28-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0006",
      "name": "Client Onboarding & Requirement Intake Playbook Credential",
      "trainingName": "Client Onboarding & Requirement Intake Playbook",
      "issueDate": "28-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-107",
    "trainingName": "Cross-Functional Agile Leadership & Scrum Mastery",
    "category": "Professional Skills",
    "shortDescription": "Empowering cross-disciplinary squad leaders with sprint planning, velocity tracking, backlog refinement, and blameless retrospectives.",
    "isMandatory": false,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "14-Jan-2026",
    "dueDate": "20-Mar-2026",
    "startDate": "18-Jan-2026",
    "completionPercentage": 80,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Facilitate high-velocity sprint planning, daily standups, and demo showcases",
      "Manage product backlog prioritization using WSJF (Weighted Shortest Job First)",
      "Conduct psychological-safety focused blameless sprint retrospectives and action tracking",
      "Measure cycle time, lead time, and flow efficiency with interactive burndown analytics"
    ],
    "expectedOutcomes": "Squad leaders guide development teams to sustainable delivery rhythms and measurable quarterly OKR achievements.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-107_r1",
        "title": "Module 1: Foundations & Core Principles of Cross-Functional Agile Leadership & Scrum Mastery",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-107_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-107_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-107_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-107",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-107_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-107_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-107_asm",
      "name": "Cross-Functional Agile Leadership & Scrum Mastery Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "18-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Cross-Functional Agile Leadership & Scrum Mastery?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Isha Patel",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-108",
    "trainingName": "Zero-Trust Infrastructure & IAM Policy Hardening",
    "category": "Technical Architecture",
    "shortDescription": "Principles of zero-trust architecture, micro-segmentation, least-privilege IAM policies, and cryptographic mutual TLS (mTLS).",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "22-Jan-2026",
    "dueDate": "25-Apr-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Advanced",
    "expectedDuration": "5.5 Hours",
    "learningObjectives": [
      "Eliminate static network perimeters using dynamic identity-aware reverse proxies",
      "Implement granular AWS/GCP IAM role-assumption conditions and ABAC policies",
      "Configure Istio service mesh mTLS peer authentication across all namespace boundaries",
      "Deploy automated secret rotation via HashiCorp Vault with dynamic ephemeral credentials"
    ],
    "expectedOutcomes": "Engineering infrastructure is hardened against lateral movement threats and insider credential misuse.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-108_r1",
        "title": "Module 1: Foundations & Core Principles of Zero-Trust Infrastructure & IAM Policy Hardening",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-108_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-108_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-108_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-108",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-108_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-108_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-108_asm",
      "name": "Zero-Trust Infrastructure & IAM Policy Hardening Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Zero-Trust Infrastructure & IAM Policy Hardening?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-109",
    "trainingName": "Workplace Diversity, Equity & Inclusion (DEI)",
    "category": "Governance & Compliance",
    "shortDescription": "Fostering an inclusive, psychologically safe, and culturally respectful workplace culture across global distributed teams.",
    "isMandatory": true,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "01-Jan-2026",
    "dueDate": "15-Feb-2026",
    "startDate": "05-Jan-2026",
    "completionDate": "22-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Recognize unconscious bias in recruitment, performance appraisals, and code reviews",
      "Implement active allyship and inclusive communication practices across hybrid teams",
      "Understand corporate grievance redressal, anti-harassment policies, and whistleblower protections",
      "Promote cognitive diversity to elevate problem-solving efficiency and team belonging"
    ],
    "expectedOutcomes": "A respectful, collaborative work atmosphere where every team member is empowered to contribute their best work.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-109_r1",
        "title": "Module 1: Foundations & Core Principles of Workplace Diversity, Equity & Inclusion (DEI)",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-109_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-109_playbook.pdf",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-109_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-109",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-109_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-109_demo.mp4",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-109_asm",
      "name": "Workplace Diversity, Equity & Inclusion (DEI) Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "22-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Workplace Diversity, Equity & Inclusion (DEI)?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-109.pdf"
      ],
      "submittedAt": "22-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Shivam Sharma",
      "reviewDate": "22-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0009",
      "name": "Workplace Diversity, Equity & Inclusion (DEI) Credential",
      "trainingName": "Workplace Diversity, Equity & Inclusion (DEI)",
      "issueDate": "22-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-110",
    "trainingName": "Advanced SQL & BigQuery Performance Tuning",
    "category": "Engineering",
    "shortDescription": "Master query execution plans, partitioning, clustering, cost optimization, and window analytics in Google BigQuery & PostgreSQL.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "10-Jan-2026",
    "dueDate": "25-Mar-2026",
    "startDate": "15-Jan-2026",
    "completionPercentage": 50,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "6 Hours",
    "learningObjectives": [
      "Optimize query slot allocation, scan bytes, and shuffle stages in distributed BigQuery engines",
      "Design time-unit partition filters and clustering keys to reduce query scan costs by up to 80%",
      "Write advanced window functions, LEAD/LAG analytics, and recursive Common Table Expressions (CTEs)",
      "Benchmark index types: B-Tree, GIN, and BRIN for high-throughput transactional database workloads"
    ],
    "expectedOutcomes": "Data analysts and engineers author lightning-fast analytical queries while slashing enterprise cloud data compute expenses.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-110_r1",
        "title": "Module 1: Foundations & Core Principles of Advanced SQL & BigQuery Performance Tuning",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "15-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-110_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-110_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-110_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-110",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-110_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-110_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-110_asm",
      "name": "Advanced SQL & BigQuery Performance Tuning Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "15-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Advanced SQL & BigQuery Performance Tuning?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-111",
    "trainingName": "SOC2 Type II Audit Preparedness & Evidence Collection",
    "category": "Governance & Compliance",
    "shortDescription": "Operational compliance requirements for Trust Services Criteria: Security, Availability, Processing Integrity, and Confidentiality.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "01-Dec-2025",
    "dueDate": "10-Jan-2026",
    "startDate": "08-Dec-2025",
    "completionPercentage": 30,
    "trainingStatus": "overdue",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Conduct continuous automated compliance testing against AICPA Trust Services Criteria",
      "Gather cryptographically verified audit artifacts for change management and access reviews",
      "Document vendor risk assessments and third-party SaaS sub-processor security evaluations",
      "Maintain immutable audit logs, incident registers, and business continuity drill reports"
    ],
    "expectedOutcomes": "Team members understand audit requirements to ensure successful un-qualified SOC2 Type II examination certifications.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-111_r1",
        "title": "Module 1: Foundations & Core Principles of SOC2 Type II Audit Preparedness & Evidence Collection",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-111_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-111_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-111_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-111",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-111_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-111_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-111_asm",
      "name": "SOC2 Type II Audit Preparedness & Evidence Collection Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of SOC2 Type II Audit Preparedness & Evidence Collection?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-112",
    "trainingName": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)",
    "category": "Product & Platform",
    "shortDescription": "Building pixel-perfect, accessible user interfaces following CollabCRM design tokens, color contrast standards, and keyboard navigation.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "08-Jan-2026",
    "dueDate": "18-Feb-2026",
    "startDate": "10-Jan-2026",
    "completionDate": "01-Feb-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Implement WCAG 2.1 AA compliant color contrast ratios, focus states, and aria attributes",
      "Utilize CollabCRM design token system for typography, spacing, elevations, and card surfaces",
      "Test web applications with screen readers (NVDA, VoiceOver) and automated axe-core audits",
      "Ensure zero layout shifts and responsive multi-device fidelity across all CRM portal screens"
    ],
    "expectedOutcomes": "Frontend developers ship polished, accessible, and brand-consistent interfaces usable by all individuals.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-112_r1",
        "title": "Module 1: Foundations & Core Principles of CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-112_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-112_playbook.pdf",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-112_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-112",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-112_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-112_demo.mp4",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-112_asm",
      "name": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1) Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "01-Feb-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-112.pdf"
      ],
      "submittedAt": "01-Feb-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": "01-Feb-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0012",
      "name": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1) Credential",
      "trainingName": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)",
      "issueDate": "01-Feb-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-113",
    "trainingName": "High-Impact Executive Presentation & Business Storytelling",
    "category": "Professional Skills",
    "shortDescription": "Techniques for crafting compelling data-driven slide decks, executive summaries, and pitch presentations for enterprise stakeholders.",
    "isMandatory": false,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "26-Jan-2026",
    "dueDate": "30-Apr-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Beginner",
    "expectedDuration": "3 Hours",
    "learningObjectives": [
      "Structure executive presentations using the Minto Pyramid Principle and SCQA frameworks",
      "Translate complex quantitative telemetry into actionable business narratives and decisions",
      "Design clear, clean data visualizations that highlight key performance indicators",
      "Master stage presence, audience engagement, and confident Q&A objection handling"
    ],
    "expectedOutcomes": "Professionals deliver persuasive, engaging presentations that align leadership and drive project approval.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-113_r1",
        "title": "Module 1: Foundations & Core Principles of High-Impact Executive Presentation & Business Storytelling",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-113_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-113_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-113_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-113",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-113_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-113_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-113_asm",
      "name": "High-Impact Executive Presentation & Business Storytelling Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of High-Impact Executive Presentation & Business Storytelling?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Isha Patel",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-114",
    "trainingName": "Distributed Systems Caching with Redis & Memcached",
    "category": "Engineering",
    "shortDescription": "Designing low-latency caching architectures, cache eviction algorithms, cache-aside patterns, and thundering herd mitigations.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "15-Jan-2026",
    "dueDate": "10-Apr-2026",
    "startDate": "22-Jan-2026",
    "completionPercentage": 40,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "4.5 Hours",
    "learningObjectives": [
      "Choose optimal caching strategies: Cache-Aside, Write-Through, and Write-Behind patterns",
      "Prevent cache penetration, cache breakdown, and avalanche issues using probabilistic early expiration",
      "Leverage Redis data structures: Hashes, Sorted Sets, Bitmaps, and HyperLogLogs for CRM metrics",
      "Configure Redis Cluster with automatic shard failover and Sentinel health monitoring"
    ],
    "expectedOutcomes": "Engineers achieve sub-5ms API response latencies while shielding core transactional databases from peak load spikes.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-114_r1",
        "title": "Module 1: Foundations & Core Principles of Distributed Systems Caching with Redis & Memcached",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-114_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-114_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-114_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-114",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-114_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-114_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-114_asm",
      "name": "Distributed Systems Caching with Redis & Memcached Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "22-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Distributed Systems Caching with Redis & Memcached?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-115",
    "trainingName": "Incident Response Management & Root Cause Analysis",
    "category": "Support & Operations",
    "shortDescription": "Incident commander protocols, SEV-1 triage procedures, stakeholder communications, and post-mortem retrospective authoring.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "28-Jan-2026",
    "dueDate": "15-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Execute Incident Commander duties, delegating technical investigation and status page updates",
      "Establish blameless 5-Whys root cause analysis workflows and preventative action items",
      "Calculate Mean Time to Detect (MTTD), Acknowledge (MTTA), and Recover (MTTR)",
      "Conduct realistic tabletop crisis simulations to validate operational escalation matrices"
    ],
    "expectedOutcomes": "Operations teams resolve production disruptions rapidly while building organizational resilience against repeat failures.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-115_r1",
        "title": "Module 1: Foundations & Core Principles of Incident Response Management & Root Cause Analysis",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-115_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-115_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-115_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-115",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-115_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-115_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-115_asm",
      "name": "Incident Response Management & Root Cause Analysis Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Incident Response Management & Root Cause Analysis?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-116",
    "trainingName": "Enterprise Sales Negotiation & Solution Selling",
    "category": "Professional Skills",
    "shortDescription": "Consultative selling methodology, enterprise procurement navigation, competitive objection handling, and win-win contract structuring.",
    "isMandatory": false,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "02-Jan-2026",
    "dueDate": "05-Feb-2026",
    "startDate": "06-Jan-2026",
    "completionDate": "29-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Apply MEDDPICC qualification frameworks to evaluate enterprise opportunity health",
      "Navigate multi-stakeholder legal, IT security, and procurement negotiation conversations",
      "Quantify customer ROI models and business value propositions in CRM proposals",
      "Manage price discount requests through value concessions rather than margin erosion"
    ],
    "expectedOutcomes": "Sales consultants close high-value annual contracts with predictable sales velocity and healthy profit margins.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-116_r1",
        "title": "Module 1: Foundations & Core Principles of Enterprise Sales Negotiation & Solution Selling",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-116_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-116_playbook.pdf",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-116_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-116",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-116_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-116_demo.mp4",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-116_asm",
      "name": "Enterprise Sales Negotiation & Solution Selling Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "29-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Enterprise Sales Negotiation & Solution Selling?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-116.pdf"
      ],
      "submittedAt": "29-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Shivam Sharma",
      "reviewDate": "29-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0016",
      "name": "Enterprise Sales Negotiation & Solution Selling Credential",
      "trainingName": "Enterprise Sales Negotiation & Solution Selling",
      "issueDate": "29-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-117",
    "trainingName": "Kubernetes Cluster Administration & Container Orchestration",
    "category": "Technical Architecture",
    "shortDescription": "Production Kubernetes management: Pod autoscaling (HPA), ingress controllers, network policies, helm charts, and daemonsets.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "12-Jan-2026",
    "dueDate": "15-Apr-2026",
    "startDate": "16-Jan-2026",
    "completionPercentage": 60,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "7 Hours",
    "learningObjectives": [
      "Manage multi-node Kubernetes clusters with control-plane high availability and etcd backups",
      "Configure Horizontal Pod Autoscalers (HPA) and cluster autoscaler on cloud node pools",
      "Author reusable Helm charts with secure values validation and semantic versioning",
      "Isolate tenant workloads using Calico network policies and Pod Security Standards (PSS)"
    ],
    "expectedOutcomes": "Cloud architects maintain stable, self-healing container infrastructures capable of absorbing extreme traffic surges.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-117_r1",
        "title": "Module 1: Foundations & Core Principles of Kubernetes Cluster Administration & Container Orchestration",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "16-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-117_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-117_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-117_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-117",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-117_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-117_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-117_asm",
      "name": "Kubernetes Cluster Administration & Container Orchestration Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "16-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Kubernetes Cluster Administration & Container Orchestration?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-118",
    "trainingName": "Anti-Bribery, Anti-Corruption & FCPA Compliance",
    "category": "Governance & Compliance",
    "shortDescription": "Global compliance rules governing corporate gifts, hospitality, political contributions, conflict of interest, and anti-bribery statutes.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "03-Jan-2026",
    "dueDate": "28-Jan-2026",
    "startDate": "07-Jan-2026",
    "completionDate": "24-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Identify situations giving rise to potential Foreign Corrupt Practices Act (FCPA) liabilities",
      "Follow proper gift declaration thresholds and corporate entertainment approval processes",
      "Report potential conflicts of interest regarding personal investments or vendor relationships",
      "Maintain accurate accounting ledgers and payment documentation without facilitation payments"
    ],
    "expectedOutcomes": "Employees uphold CollabCRM’s zero-tolerance standard for bribery, corruption, and unethical business practices.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-118_r1",
        "title": "Module 1: Foundations & Core Principles of Anti-Bribery, Anti-Corruption & FCPA Compliance",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-118_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-118_playbook.pdf",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-118_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-118",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-118_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-118_demo.mp4",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-118_asm",
      "name": "Anti-Bribery, Anti-Corruption & FCPA Compliance Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "24-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Anti-Bribery, Anti-Corruption & FCPA Compliance?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-118.pdf"
      ],
      "submittedAt": "24-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Isha Patel",
      "reviewDate": "24-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0018",
      "name": "Anti-Bribery, Anti-Corruption & FCPA Compliance Credential",
      "trainingName": "Anti-Bribery, Anti-Corruption & FCPA Compliance",
      "issueDate": "24-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-119",
    "trainingName": "RESTful & GraphQL API Design Governance",
    "category": "Engineering",
    "shortDescription": "Authoring clean, predictable APIs with JSON:API conventions, schema-first GraphQL, versioning, pagination, and OpenAPI 3.1 docs.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "20-Jan-2026",
    "dueDate": "10-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Design RESTful resource URI hierarchies adhering to RFC-compliant HTTP status codes",
      "Implement cursor-based pagination and idempotent HTTP request signatures (Idempotency-Key)",
      "Model GraphQL schemas with Apollo Server, resolving N+1 queries via DataLoader batching",
      "Automate contract testing and Swagger/OpenAPI documentation generation via CI gates"
    ],
    "expectedOutcomes": "Developers produce delightful, cohesive developer-facing APIs with long-term backward compatibility.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-119_r1",
        "title": "Module 1: Foundations & Core Principles of RESTful & GraphQL API Design Governance",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-119_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-119_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-119_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-119",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-119_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-119_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-119_asm",
      "name": "RESTful & GraphQL API Design Governance Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of RESTful & GraphQL API Design Governance?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-120",
    "trainingName": "Customer Success Lifecycle & Retention Strategies",
    "category": "Support & Operations",
    "shortDescription": "Proactive customer relationship management, health score monitoring, net retention rate (NRR) optimization, and churn prevention.",
    "isMandatory": true,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "10-Jan-2026",
    "dueDate": "30-Mar-2026",
    "startDate": "12-Jan-2026",
    "completionPercentage": 75,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Design multi-factor customer health score algorithms using login frequency and feature usage telemetry",
      "Conduct high-value Quarterly Business Reviews (QBRs) showcasing customer outcomes and ROI",
      "Execute early-warning churn mitigation playbooks when product utilization drops below thresholds",
      "Drive expansion revenue and customer advocacy through cross-selling and success testimonials"
    ],
    "expectedOutcomes": "Customer success managers build loyal client partnerships, maximizing customer lifetime value and product adoption.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-120_r1",
        "title": "Module 1: Foundations & Core Principles of Customer Success Lifecycle & Retention Strategies",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "12-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-120_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-120_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-120_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-120",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-120_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-120_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-120_asm",
      "name": "Customer Success Lifecycle & Retention Strategies Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "12-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Customer Success Lifecycle & Retention Strategies?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Shivam Sharma",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-121",
    "trainingName": "Disaster Recovery & High Availability Architecture",
    "category": "Technical Architecture",
    "shortDescription": "Multi-region failover design, Recovery Time Objective (RTO), Recovery Point Objective (RPO), database replication, and chaos engineering.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "15-Dec-2025",
    "dueDate": "20-Jan-2026",
    "startDate": "18-Dec-2025",
    "completionPercentage": 15,
    "trainingStatus": "overdue",
    "difficultyLevel": "Advanced",
    "expectedDuration": "5 Hours",
    "learningObjectives": [
      "Define verifiable RTO and RPO benchmarks across tier-1, tier-2, and tier-3 CRM services",
      "Implement active-passive cross-region database streaming replication and split-brain defenses",
      "Execute DNS health check automated failovers using latency-based routing policies",
      "Conduct Chaos Mesh experiments simulating network partitions and datacenter power failures"
    ],
    "expectedOutcomes": "System resilience is verified to guarantee continuous business operation even through severe infrastructure disasters.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-121_r1",
        "title": "Module 1: Foundations & Core Principles of Disaster Recovery & High Availability Architecture",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-121_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-121_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-121_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-121",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-121_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-121_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-121_asm",
      "name": "Disaster Recovery & High Availability Architecture Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Disaster Recovery & High Availability Architecture?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-122",
    "trainingName": "Artificial Intelligence & LLM Prompt Engineering for Enterprise",
    "category": "Engineering",
    "shortDescription": "Leveraging large language models, retrieval augmented generation (RAG), vector embeddings, and guardrails in enterprise applications.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "27-Jan-2026",
    "dueDate": "20-Jun-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "5 Hours",
    "learningObjectives": [
      "Apply advanced prompt engineering: Few-shot prompting, Chain-of-Thought, and ReAct paradigms",
      "Build scalable RAG pipelines using pgvector, hybrid semantic search, and re-ranking models",
      "Implement LLM safety guardrails to prevent hallucinations, jailbreaks, and prompt injections",
      "Benchmark model latency, token utilization economics, and output precision across LLM providers"
    ],
    "expectedOutcomes": "Engineers build high-reliability AI-powered CRM features that respect customer privacy and enterprise compliance.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-122_r1",
        "title": "Module 1: Foundations & Core Principles of Artificial Intelligence & LLM Prompt Engineering for Enterprise",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-122_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-122_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-122_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-122",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-122_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-122_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-122_asm",
      "name": "Artificial Intelligence & LLM Prompt Engineering for Enterprise Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Artificial Intelligence & LLM Prompt Engineering for Enterprise?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-123",
    "trainingName": "HIPAA & Health Data Privacy Standards",
    "category": "Governance & Compliance",
    "shortDescription": "Health Insurance Portability and Accountability Act: Protecting electronic Protected Health Information (ePHI), encryption, and BAA rules.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "04-Jan-2026",
    "dueDate": "02-Feb-2026",
    "startDate": "08-Jan-2026",
    "completionDate": "25-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3 Hours",
    "learningObjectives": [
      "Classify ePHI identifiers according to HIPAA Privacy Rule definitions and Safe Harbor methods",
      "Ensure AES-256 encryption at rest and TLS 1.3 in transit across all health data integrations",
      "Enforce Business Associate Agreements (BAA) and minimum-necessary data disclosure rules",
      "Execute required HIPAA administrative, physical, and technical safeguard audits"
    ],
    "expectedOutcomes": "Staff safeguard health data confidentiality, avoiding severe regulatory fines and protecting patient privacy.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-123_r1",
        "title": "Module 1: Foundations & Core Principles of HIPAA & Health Data Privacy Standards",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-123_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-123_playbook.pdf",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-123_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-123",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-123_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-123_demo.mp4",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-123_asm",
      "name": "HIPAA & Health Data Privacy Standards Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "25-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of HIPAA & Health Data Privacy Standards?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-123.pdf"
      ],
      "submittedAt": "25-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Isha Patel",
      "reviewDate": "25-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0023",
      "name": "HIPAA & Health Data Privacy Standards Credential",
      "trainingName": "HIPAA & Health Data Privacy Standards",
      "issueDate": "25-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-124",
    "trainingName": "Product Analytics, Telemetry & User Journey Mapping",
    "category": "Product & Platform",
    "shortDescription": "Event tracking taxonomy, retention cohorts, funnel conversion drop-off analysis, and feature adoption metrics with Mixpanel/PostHog.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "16-Jan-2026",
    "dueDate": "25-Apr-2026",
    "startDate": "20-Jan-2026",
    "completionPercentage": 35,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Standardize event tracking naming schemas and metadata properties across web and mobile clients",
      "Analyze multi-step signup and onboarding conversion funnels to identify friction points",
      "Build retention heatmaps and cohort analyses to quantify long-term feature stickiness",
      "Design randomized A/B experimentation hypotheses with statistical significance guardrails"
    ],
    "expectedOutcomes": "Product teams make validated, user-centric decisions driven by empirical customer behavioral analytics.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-124_r1",
        "title": "Module 1: Foundations & Core Principles of Product Analytics, Telemetry & User Journey Mapping",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "20-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-124_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-124_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-124_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-124",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-124_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-124_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-124_asm",
      "name": "Product Analytics, Telemetry & User Journey Mapping Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "20-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Product Analytics, Telemetry & User Journey Mapping?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-125",
    "trainingName": "Conflict Resolution & Collaborative Problem Solving",
    "category": "Professional Skills",
    "shortDescription": "Navigating difficult interpersonal discussions, depersonalizing feedback, finding win-win compromises, and active empathetic listening.",
    "isMandatory": false,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "25-Jan-2026",
    "dueDate": "30-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2.5 Hours",
    "learningObjectives": [
      "Apply the Thomas-Kilmann Conflict Mode Instrument (TKI) to match response styles to conflict stakes",
      "Deliver candid yet empathetic performance feedback using the SBI (Situation-Behavior-Impact) model",
      "De-escalate emotional friction in high-pressure technical disagreements or project scope shifts",
      "Establish team alignment through collaborative consensus building and clear accountability"
    ],
    "expectedOutcomes": "Teams maintain strong interpersonal trust and resolve disagreements constructively without lasting friction.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-125_r1",
        "title": "Module 1: Foundations & Core Principles of Conflict Resolution & Collaborative Problem Solving",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-125_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-125_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-125_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-125",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-125_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-125_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-125_asm",
      "name": "Conflict Resolution & Collaborative Problem Solving Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Conflict Resolution & Collaborative Problem Solving?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Shivam Sharma",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-126",
    "trainingName": "Micro-Frontend Architecture with Module Federation",
    "category": "Engineering",
    "shortDescription": "Decoupling large monolithic web applications into independently deployable micro-frontends using Webpack 5 Module Federation.",
    "isMandatory": false,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "12-Jan-2026",
    "dueDate": "10-Apr-2026",
    "startDate": "18-Jan-2026",
    "completionPercentage": 55,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "5.5 Hours",
    "learningObjectives": [
      "Configure Webpack 5 Module Federation host and remote container boundaries",
      "Manage shared dependencies (React, design system components) with singleton version resolution",
      "Implement client-side micro-frontend routing and custom event bus communication",
      "Ensure isolated CSS scoping and resilient error boundaries to isolate remote container failures"
    ],
    "expectedOutcomes": "Engineering squads deliver and deploy UI modules independently without blocking shared release pipelines.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-126_r1",
        "title": "Module 1: Foundations & Core Principles of Micro-Frontend Architecture with Module Federation",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-126_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-126_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-126_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-126",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-126_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-126_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-126_asm",
      "name": "Micro-Frontend Architecture with Module Federation Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "18-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Micro-Frontend Architecture with Module Federation?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-127",
    "trainingName": "Secure Code Review & Static Analysis (SAST/DAST)",
    "category": "Technical Architecture",
    "shortDescription": "Integrating automated vulnerability scanning, SonarQube rules, Semgrep pattern matching, and peer security code reviews.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "01-Jan-2026",
    "dueDate": "08-Feb-2026",
    "startDate": "04-Jan-2026",
    "completionDate": "27-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Advanced",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Identify SQL injections, cross-site scripting (XSS), and insecure deserialization in pull requests",
      "Configure Semgrep rules and SonarQube quality gates to block critical security vulnerabilities in CI",
      "Conduct structured peer threat-modeling sessions for major software architectural revisions",
      "Remediate vulnerable third-party dependencies using automated Dependabot/Snyk pull requests"
    ],
    "expectedOutcomes": "Developers prevent security flaws before merging code into main branch deployment pipelines.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-127_r1",
        "title": "Module 1: Foundations & Core Principles of Secure Code Review & Static Analysis (SAST/DAST)",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-127_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-127_playbook.pdf",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-127_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-127",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-127_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-127_demo.mp4",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-127_asm",
      "name": "Secure Code Review & Static Analysis (SAST/DAST) Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "27-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Secure Code Review & Static Analysis (SAST/DAST)?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-127.pdf"
      ],
      "submittedAt": "27-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": "27-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0027",
      "name": "Secure Code Review & Static Analysis (SAST/DAST) Credential",
      "trainingName": "Secure Code Review & Static Analysis (SAST/DAST)",
      "issueDate": "27-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-128",
    "trainingName": "Service Level Objective (SLO) & Error Budget Engineering",
    "category": "Support & Operations",
    "shortDescription": "Site Reliability Engineering principles: Defining SLIs, establishing realistic SLOs, managing error budgets, and alert fatigue reduction.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "28-Jan-2026",
    "dueDate": "20-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Formulate user-centric Service Level Indicators (SLIs) measuring availability and latency",
      "Negotiate achievable Service Level Objectives (SLOs) aligning customer expectations with engineering velocity",
      "Govern release gate freezes when error budgets are exhausted to protect system reliability",
      "Eliminate noisy non-actionable monitoring alerts by adopting burn-rate based alerting rules"
    ],
    "expectedOutcomes": "Operations teams maintain rock-solid reliability while sustaining healthy development innovation velocity.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-128_r1",
        "title": "Module 1: Foundations & Core Principles of Service Level Objective (SLO) & Error Budget Engineering",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-128_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-128_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-128_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-128",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-128_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-128_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-128_asm",
      "name": "Service Level Objective (SLO) & Error Budget Engineering Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Service Level Objective (SLO) & Error Budget Engineering?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-129",
    "trainingName": "ISO 27001 Information Security Management Systems",
    "category": "Governance & Compliance",
    "shortDescription": "Implementing ISO/IEC 27001:2022 security controls, risk treatment plans, asset inventories, and internal surveillance audit procedures.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "10-Jan-2026",
    "dueDate": "15-Mar-2026",
    "startDate": "14-Jan-2026",
    "completionPercentage": 70,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Implement Annex A information security controls across organizational, people, physical, and technological themes",
      "Maintain comprehensive information asset registers with classification levels and custody tracking",
      "Formulate risk treatment plans using qualitative likelihood and business impact matrices",
      "Participate effectively in internal and external ISO 27001 surveillance audits"
    ],
    "expectedOutcomes": "The organization systematically manages information security risks to uphold accredited global certifications.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-129_r1",
        "title": "Module 1: Foundations & Core Principles of ISO 27001 Information Security Management Systems",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "14-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-129_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-129_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-129_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-129",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-129_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-129_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-129_asm",
      "name": "ISO 27001 Information Security Management Systems Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "14-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of ISO 27001 Information Security Management Systems?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Isha Patel",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-130",
    "trainingName": "Kafka Event-Driven Architecture & Stream Processing",
    "category": "Engineering",
    "shortDescription": "Building distributed event streams with Apache Kafka: Topics, partitions, consumer groups, schema registry, and idempotent producers.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "05-Dec-2025",
    "dueDate": "12-Jan-2026",
    "startDate": "10-Dec-2025",
    "completionPercentage": 25,
    "trainingStatus": "overdue",
    "difficultyLevel": "Advanced",
    "expectedDuration": "6 Hours",
    "learningObjectives": [
      "Design high-throughput Kafka topics with optimal partition sizing and retention policies",
      "Enforce strong schema evolution and backwards compatibility using Avro and Confluent Schema Registry",
      "Configure exactly-once processing (EOS) semantics using transactional producer and consumer APIs",
      "Build real-time event aggregation and streaming join pipelines with Kafka Streams / ksqlDB"
    ],
    "expectedOutcomes": "Engineers construct resilient asynchronous data highways powering decoupled microservices across the CRM.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-130_r1",
        "title": "Module 1: Foundations & Core Principles of Kafka Event-Driven Architecture & Stream Processing",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-130_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-130_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-130_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-130",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-130_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-130_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-130_asm",
      "name": "Kafka Event-Driven Architecture & Stream Processing Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Kafka Event-Driven Architecture & Stream Processing?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-131",
    "trainingName": "CollabCRM Mobile App Architecture & Offline Sync",
    "category": "Product & Platform",
    "shortDescription": "Building offline-first mobile experiences: SQLite caching, background data synchronization, optimistic UI updates, and conflict resolution.",
    "isMandatory": false,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "26-Jan-2026",
    "dueDate": "15-Jun-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4.5 Hours",
    "learningObjectives": [
      "Implement local SQLite persistence and reactive querying using WatermelonDB / Realm",
      "Design two-way conflict resolution algorithms (Last-Write-Wins and CRDT delta merges)",
      "Deliver optimistic client UI updates with automated retry queues for intermittent connectivity",
      "Optimize mobile battery and network payload consumption with compressed Delta Sync payloads"
    ],
    "expectedOutcomes": "Field sales and service agents experience seamless CRM productivity regardless of cellular network dead zones.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-131_r1",
        "title": "Module 1: Foundations & Core Principles of CollabCRM Mobile App Architecture & Offline Sync",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-131_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-131_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-131_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-131",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-131_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-131_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-131_asm",
      "name": "CollabCRM Mobile App Architecture & Offline Sync Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of CollabCRM Mobile App Architecture & Offline Sync?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-132",
    "trainingName": "Time Management & Deep Work Practices for Knowledge Workers",
    "category": "Professional Skills",
    "shortDescription": "Mastering calendar blocking, asynchronous communication discipline, context-switching reduction, and deep work focus blocks.",
    "isMandatory": false,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "01-Jan-2026",
    "dueDate": "20-Jan-2026",
    "startDate": "04-Jan-2026",
    "completionDate": "18-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Structure calendar focus blocks following Cal Newport’s Deep Work philosophies",
      "Minimize cognitive switching costs by batching email, Slack, and administrative tasks",
      "Apply the Eisenhower Matrix to ruthlessly prioritize high-leverage quarterly objectives",
      "Establish personal boundaries to sustain long-term intellectual energy and prevent workplace burnout"
    ],
    "expectedOutcomes": "Knowledge workers achieve high daily cognitive output and job satisfaction with low chronic stress.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-132_r1",
        "title": "Module 1: Foundations & Core Principles of Time Management & Deep Work Practices for Knowledge Workers",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-132_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-132_playbook.pdf",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-132_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-132",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-132_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-132_demo.mp4",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-132_asm",
      "name": "Time Management & Deep Work Practices for Knowledge Workers Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "18-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Time Management & Deep Work Practices for Knowledge Workers?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-132.pdf"
      ],
      "submittedAt": "18-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Shivam Sharma",
      "reviewDate": "18-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0032",
      "name": "Time Management & Deep Work Practices for Knowledge Workers Credential",
      "trainingName": "Time Management & Deep Work Practices for Knowledge Workers",
      "issueDate": "18-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  }
]
  },
  'EMP-010': {
    profile: {
      id: 'EMP-010',
      name: 'Karan Johar',
      firstName: 'Karan',
      lastName: 'Johar',
      designation: 'Former Sales Lead',
      department: 'Sales & BD',
      reportingManager: 'Isha Patel (Head of People)',
      reportingManagerId: 'EMP-001',
      email: 'karan.j@collabcrm.com',
      phone: '+1 9005048299',
      avatarInitials: 'KJ',
      avatarBg: '#64748b',
      experience: '2Y 4M',
      status: 'inactive',
      exitDate: '15-Feb-2026'
    },
    notifications: [],
    trainings: [
      {
        id: 'TRN-ASSIGN-901',
        trainingName: 'Executive Leadership & Strategic Governance',
        category: 'Governance & Compliance',
        shortDescription: 'Core executive oversight and ethical corporate conduct.',
        isMandatory: true,
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '10-Dec-2025',
        dueDate: '15-Jan-2026',
        startDate: '12-Dec-2025',
        completionPercentage: 100,
        trainingStatus: 'completed',
        resources: [],
        review: {
          status: 'approved',
          reviewerName: 'Isha Patel',
          reviewDate: '14-Jan-2026',
          feedback: 'Successfully finished before exit.'
        },
        certificate: {
          id: 'CERT-2026-099',
          name: 'Executive Leadership Credential',
          issueDate: '14-Jan-2026',
          expiryDate: '14-Jan-2028',
          status: 'issued'
        }
      }
    ]
  }
};

// Global in-memory training program registry for version tracking
const TRAINING_PROGRAMS_REGISTRY = {
  'TR-101': { id: 'TR-101', title: 'CollabCRM Recruitment & Client Portal Workflows', version: 1, versions: [], status: 'published' },
  'TR-102': { id: 'TR-102', title: 'Enterprise Cloud Architecture & Distributed Microservices', version: 1, versions: [], status: 'published' },
  'TR-103': { id: 'TR-103', title: 'Information Security, GDPR & Data Privacy 2026', version: 1, versions: [], status: 'published' },
  'TR-104': { id: 'TR-104', title: 'Executive Sales Leadership & High-Ticket Negotiation', version: 1, versions: [], status: 'published' }
};

// Helper: Calculate Dashboard Stats
function calculateEmployeeDashboardStats(store) {
  const trainings = store.trainings || [];
  return {
    totalAssigned: trainings.length,
    notStarted: trainings.filter(t => t.trainingStatus === 'not_started').length,
    inProgress: trainings.filter(t => t.trainingStatus === 'in_progress').length,
    submittedForReview: trainings.filter(t => t.trainingStatus === 'submitted_for_review').length,
    changesRequested: trainings.filter(t => t.trainingStatus === 'changes_requested').length,
    completed: trainings.filter(t => t.trainingStatus === 'completed').length,
    overdue: trainings.filter(t => t.trainingStatus === 'overdue').length,
    certificatesIssued: trainings.filter(t => t.certificate && t.certificate.status === 'issued').length
  };
}

// Helper: Parse JSON Body
function parseJsonBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (e) {
        resolve({});
      }
    });
  });
}

// Helper: Send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// =============================================================================
// HTTP SERVER WITH REST APIS & STATIC SPA SERVING
// =============================================================================
const server = http.createServer(async (req, res) => {
  // CORS & Cache control
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // 1. Health check
  if (pathname === '/api/health') {
    return sendJson(res, 200, {
      status: 'online',
      service: 'CollabCRM Training Module',
      timestamp: new Date().toISOString()
    });
  }

  // 2. GET Employee Training Data
  if (pathname === '/api/employee/training-data' && req.method === 'GET') {
    const empId = parsedUrl.searchParams.get('employeeId') || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[empId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const isInactive = store.profile && (store.profile.status === 'inactive' || store.profile.status === 'exited');
    const stats = calculateEmployeeDashboardStats(store);
    return sendJson(res, 200, {
      success: true,
      isBlocked: isInactive,
      employee: store.profile,
      stats: stats,
      trainings: store.trainings,
      notifications: store.notifications
    });
  }

  // 3. POST Resource Completion / Progress Tracking
  if (pathname === '/api/employee/resource-progress' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, resourceId, isCompleted } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training not found' });
    }

    const resource = training.resources.find(r => r.id === resourceId);
    if (!resource) {
      return sendJson(res, 404, { success: false, message: 'Resource not found' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    resource.isCompleted = !!isCompleted;
    resource.completionDate = isCompleted ? dateStr : null;
    resource.completionTimestamp = isCompleted ? `${dateStr}, ${timeStr}` : null;

    // Calculate overall progress using mandatory resources
    const mandatoryResources = training.resources.filter(r => r.isMandatory);
    const completedMandatory = mandatoryResources.filter(r => r.isCompleted).length;
    const totalMandatory = mandatoryResources.length;

    const progress = totalMandatory > 0 ? Math.round((completedMandatory / totalMandatory) * 100) : 100;
    training.completionPercentage = progress;

    if (training.trainingStatus === 'not_started' && progress > 0) {
      training.trainingStatus = 'in_progress';
      training.startDate = dateStr;
    }

    return sendJson(res, 200, {
      success: true,
      message: isCompleted ? 'Resource marked as completed' : 'Resource marked as pending',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 4. POST Assessment Submission
  if (pathname === '/api/employee/assessment-submit' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, answers } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training || !training.assessment) {
      return sendJson(res, 404, { success: false, message: 'Assessment not found for this training' });
    }

    const asm = training.assessment;
    if (asm.attemptsUsed >= asm.maxAttempts && !asm.passed) {
      return sendJson(res, 400, {
        success: false,
        message: 'Maximum assessment attempts exceeded. Contact your reporting manager for a retake waiver.'
      });
    }

    // Grade answers
    const questions = asm.questions || [];
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers && answers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 100;
    const passed = score >= asm.passingScore;

    asm.attemptsUsed = (asm.attemptsUsed || 0) + 1;
    asm.passed = passed;
    asm.isPassed = passed;
    asm.bestScore = Math.max(asm.bestScore || 0, score);

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    if (!asm.previousAttempts) asm.previousAttempts = [];
    asm.previousAttempts.push({
      attemptNumber: asm.attemptsUsed,
      score: score,
      passed: passed,
      submissionDate: `${dateStr}, ${timeStr}`
    });

    return sendJson(res, 200, {
      success: true,
      score: score,
      passed: passed,
      attemptNumber: asm.attemptsUsed,
      attemptsRemaining: Math.max(0, asm.maxAttempts - asm.attemptsUsed),
      submissionDate: `${dateStr}, ${timeStr}`,
      training: training
    });
  }

  // 5. POST Training Submission For Review
  if (pathname === '/api/employee/training-submit' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, remarks, evidenceFiles } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training not found' });
    }

    // Validation checks
    const mandatoryResources = training.resources.filter(r => r.isMandatory);
    const incompleteMandatory = mandatoryResources.some(r => !r.isCompleted);
    if (incompleteMandatory) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot submit training. Please complete all mandatory learning resources first.'
      });
    }

    if (training.assessment && !training.assessment.passed) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot submit training. You must pass the required certification assessment.'
      });
    }

    if (!remarks || remarks.trim().length < 5) {
      return sendJson(res, 400, {
        success: false,
        message: 'Please provide completion remarks describing your practical learnings and takeaways.'
      });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.submission = {
      completionRemarks: remarks.trim(),
      evidenceFiles: evidenceFiles || ['compliance_evidence_bundle.pdf'],
      submittedAt: `${dateStr}, ${timeStr}`,
      isLocked: true
    };

    training.trainingStatus = 'submitted_for_review';
    training.review = {
      status: 'pending',
      reviewerName: training.assignedBy,
      reviewDate: null,
      feedback: 'Awaiting manager evaluation.'
    };

    // Add confirmation notification
    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Submission Received',
      message: `Your training "${training.trainingName}" was submitted for review to ${training.assignedBy}.`,
      type: 'info',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: 'Training successfully submitted for manager review.',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 6. POST Resubmit For Review (When changes requested)
  if (pathname === '/api/employee/training-resubmit' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, remarks, evidenceFiles } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training not found' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.submission.completionRemarks = remarks || training.submission.completionRemarks;
    if (evidenceFiles && evidenceFiles.length > 0) {
      training.submission.evidenceFiles = evidenceFiles;
    }
    training.submission.submittedAt = `${dateStr}, ${timeStr}`;
    training.submission.isLocked = true;

    training.trainingStatus = 'submitted_for_review';
    training.review.status = 'pending';
    training.review.feedback = 'Revisions submitted. Awaiting manager re-evaluation.';

    return sendJson(res, 200, {
      success: true,
      message: 'Training revisions successfully resubmitted for manager review.',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 7. GET My Certificates
  if (pathname === '/api/employee/certificates' && req.method === 'GET') {
    const empId = parsedUrl.searchParams.get('employeeId') || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[empId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const certs = store.trainings
      .filter(t => t.certificate && t.certificate.status === 'issued')
      .map(t => ({
        ...t.certificate,
        trainingName: t.trainingName,
        category: t.category,
        assignedBy: t.assignedBy
      }));

    return sendJson(res, 200, {
      success: true,
      certificates: certs
    });
  }

  // 8. GET Training History
  if (pathname === '/api/employee/history' && req.method === 'GET') {
    const empId = parsedUrl.searchParams.get('employeeId') || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[empId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const history = store.trainings.map(t => {
      let scoreStr = '-';
      if (t.assessment && t.assessment.previousAttempts && t.assessment.previousAttempts.length > 0) {
        scoreStr = `${t.assessment.previousAttempts[t.assessment.previousAttempts.length - 1].score}%`;
      }
      return {
        id: t.id,
        trainingName: t.trainingName,
        category: t.category,
        assignedBy: t.assignedBy,
        assignedDate: t.assignedDate,
        dueDate: t.dueDate,
        startDate: t.startDate || '-',
        submissionDate: (t.submission && t.submission.submittedAt) ? t.submission.submittedAt : '-',
        reviewDate: (t.review && t.review.reviewDate) ? t.review.reviewDate : '-',
        completionDate: (t.trainingStatus === 'completed' && t.review) ? (t.review.reviewDate || t.dueDate) : '-',
        progress: t.completionPercentage,
        assessmentScore: scoreStr,
        assignmentStatus: t.trainingStatus,
        reviewStatus: t.review ? t.review.status : 'not_submitted',
        certificateStatus: (t.certificate && t.certificate.status === 'issued') ? 'Issued' : 'Not Issued'
      };
    });

    return sendJson(res, 200, {
      success: true,
      history: history
    });
  }

  // 9. POST Assign New Training to Employee Store (With Exit & Duplicate Active Validations)
  if (pathname === '/api/employee/assign' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, training } = body;
    const targetEmpId = employeeId || (training && training.employeeId) || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    if (!training || !training.id) {
      return sendJson(res, 400, { success: false, message: 'Invalid training assignment payload' });
    }

    // Validation 1: Prevent new assignments when employee is inactive or exited
    if (store.profile && (store.profile.status === 'inactive' || store.profile.status === 'exited')) {
      return sendJson(res, 400, {
        success: false,
        message: `Cannot assign training: Employee ${store.profile.name} (${store.profile.id}) is marked as inactive / exited.`
      });
    }

    // Validation 2: Prevent duplicate active assignments
    const isDuplicateActive = store.trainings.some(t => {
      const sameProg = (t.programId && training.programId && t.programId === training.programId) ||
                       (t.trainingName && training.trainingName && t.trainingName.trim().toLowerCase() === training.trainingName.trim().toLowerCase());
      const isActive = t.trainingStatus !== 'cancelled' && t.trainingStatus !== 'completed';
      return sameProg && isActive && t.id !== training.id;
    });

    if (isDuplicateActive) {
      return sendJson(res, 400, {
        success: false,
        message: `An active assignment for this training program already exists for ${store.profile.name}. Cancel or reassign the existing active record instead.`
      });
    }

    // Attach current program version if applicable
    const progMeta = training.programId ? TRAINING_PROGRAMS_REGISTRY[training.programId] : null;
    if (progMeta && !training.programVersion) {
      training.programVersion = progMeta.version || 1;
    }

    const existingIdx = store.trainings.findIndex(t => t.id === training.id);
    if (existingIdx !== -1) {
      Object.assign(store.trainings[existingIdx], training);
    } else {
      store.trainings.unshift(training);
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'New Training Assigned',
      message: `"${training.trainingName || training.title}" has been assigned to you. Due Date: ${training.dueDate}.`,
      type: 'assignment',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 10. POST Reviewer Decision (In-place transition from My Training to Training History on Approval)
  if (pathname === '/api/employee/review-decision' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, action, reviewerName, reviewerId, feedback, certificate, userRole } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId || t.programId === body.programId);
    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training assignment not found' });
    }

    // Security Check: Enforce authorized reviewer permissions
    const isAuthorizedAdmin = userRole === 'admin' || userRole === 'hr';
    const isDesignatedReviewer = training.reviewerId && reviewerId && training.reviewerId === reviewerId;
    const isDirectManager = store.profile && reviewerId && store.profile.reportingManagerId === reviewerId;
    const isDesignatedName = training.reviewerName && reviewerName && training.reviewerName.toLowerCase().includes(reviewerName.toLowerCase());

    if (!isAuthorizedAdmin && !isDesignatedReviewer && !isDirectManager && !isDesignatedName && userRole !== 'admin') {
      // Allow if reviewerName matches assigner or manager
      const assignerMatch = training.assignedBy && reviewerName && training.assignedBy.toLowerCase().includes(reviewerName.toLowerCase());
      if (!assignerMatch) {
        return sendJson(res, 403, {
          success: false,
          message: 'Permission Denied: You are not authorized to evaluate this submission. Only the assigned reviewer, reporting manager, or Admin can approve.'
        });
      }
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    if (action === 'approve') {
      training.trainingStatus = 'completed';
      training.status = 'Completed';
      training.completionPercentage = 100;
      training.completionDate = dateStr;
      training.review = {
        status: 'approved',
        reviewerName: reviewerName || training.reviewerName || training.assignedBy || 'Isha Patel (Admin)',
        reviewerId: reviewerId || training.reviewerId || null,
        reviewDate: `${dateStr}, ${timeStr}`,
        feedback: feedback || 'Submission approved. All mandatory resources and assessment requirements verified.'
      };
      if (certificate) {
        training.certificate = certificate;
      } else if (!training.certificate) {
        training.certificate = {
          id: `CERT-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`,
          name: `${training.trainingName} Credential`,
          trainingName: training.trainingName,
          issueDate: dateStr,
          expiryDate: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          status: 'issued',
          recipientName: store.profile.name,
          recipientId: store.profile.id || store.profile.employeeId,
          signatoryName: 'Isha Patel',
          signatoryTitle: 'Head of People & Org Development'
        };
      }
      store.notifications.unshift({
        id: `notif_${Date.now()}`,
        title: 'Training Approved & Completed',
        message: `Your submission for "${training.trainingName}" was approved by ${training.review.reviewerName}. Official certificate issued!`,
        type: 'certificate',
        timestamp: `${dateStr}, ${timeStr}`,
        trainingId: training.id,
        read: false
      });
    } else if (action === 'request_changes') {
      training.trainingStatus = 'changes_requested';
      training.status = 'Changes Requested';
      if (training.submission) training.submission.isLocked = false;
      training.review = {
        status: 'changes_requested',
        reviewerName: reviewerName || training.reviewerName || training.assignedBy || 'Isha Patel (Admin)',
        reviewerId: reviewerId || training.reviewerId || null,
        reviewDate: `${dateStr}, ${timeStr}`,
        feedback: feedback || 'Please revise your submission remarks and attach supporting evidence.'
      };
      store.notifications.unshift({
        id: `notif_${Date.now()}`,
        title: 'Changes Requested on Submission',
        message: `${training.review.reviewerName} requested updates on "${training.trainingName}": "${training.review.feedback}"`,
        type: 'warning',
        timestamp: `${dateStr}, ${timeStr}`,
        trainingId: training.id,
        read: false
      });
    } else if (action === 'reject') {
      training.trainingStatus = 'in_progress';
      training.status = 'In Progress';
      if (training.submission) training.submission.isLocked = false;
      training.review = {
        status: 'rejected',
        reviewerName: reviewerName || training.reviewerName || training.assignedBy || 'Isha Patel (Admin)',
        reviewerId: reviewerId || training.reviewerId || null,
        reviewDate: `${dateStr}, ${timeStr}`,
        feedback: feedback || 'Submission rejected.'
      };
    }

    return sendJson(res, 200, {
      success: true,
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 11. POST Cancel Assignment (Feature 1: Cancellation with reason, retains history & progress)
  if (pathname === '/api/training/cancel-assignment' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { assignmentId, employeeId, cancellationReason, cancelledBy } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === assignmentId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Assignment not found.' });
    }

    if (!cancellationReason || cancellationReason.trim().length < 3) {
      return sendJson(res, 400, { success: false, message: 'Please provide a valid reason for cancellation.' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.trainingStatus = 'cancelled';
    training.status = 'Cancelled';
    training.cancellationReason = cancellationReason.trim();
    training.cancelledBy = cancelledBy || 'Admin';
    training.cancelledAt = `${dateStr}, ${timeStr}`;

    if (!training.auditHistory) training.auditHistory = [];
    training.auditHistory.unshift({
      date: `${dateStr}, ${timeStr}`,
      action: 'Assignment Cancelled',
      user: cancelledBy || 'Admin',
      notes: `Cancelled. Reason: ${cancellationReason.trim()}`
    });

    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Training Assignment Cancelled',
      message: `Your training assignment for "${training.trainingName}" was cancelled by ${training.cancelledBy}. Reason: ${training.cancellationReason}`,
      type: 'warning',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: 'Training assignment cancelled successfully. Past progress and history preserved.',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 12. POST Reassign Training (Feature 1: Reassign with new due date, retains progress, checks duplicate)
  if (pathname === '/api/training/reassign' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { assignmentId, employeeId, newDueDate, reassignedBy, notes } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === assignmentId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Assignment not found.' });
    }

    if (!newDueDate) {
      return sendJson(res, 400, { success: false, message: 'New due date is required for reassignment.' });
    }

    // Check if another active assignment exists
    const duplicate = store.trainings.find(t => {
      if (t.id === assignmentId) return false;
      const sameProg = (training.programId && t.programId && t.programId === training.programId) ||
                       (training.trainingName && t.trainingName && t.trainingName.trim().toLowerCase() === training.trainingName.trim().toLowerCase());
      const isActive = t.trainingStatus !== 'cancelled' && t.trainingStatus !== 'completed';
      return sameProg && isActive;
    });
    if (duplicate) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot reassign: An active assignment already exists for this training program.'
      });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.dueDate = newDueDate;
    training.trainingStatus = (training.completionPercentage > 0) ? 'in_progress' : 'not_started';
    training.status = (training.completionPercentage > 0) ? 'In Progress' : 'Not Started';
    training.reassignedAt = `${dateStr}, ${timeStr}`;
    training.reassignedBy = reassignedBy || 'Admin';
    training.cancellationReason = null;

    if (!training.auditHistory) training.auditHistory = [];
    training.auditHistory.unshift({
      date: `${dateStr}, ${timeStr}`,
      action: 'Assignment Reassigned',
      user: reassignedBy || 'Admin',
      notes: `Reassigned with new due date ${newDueDate}. ${notes || ''}`
    });

    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Training Reassigned',
      message: `"${training.trainingName}" has been reassigned to you by ${reassignedBy || 'Admin'}. New Due Date: ${newDueDate}.`,
      type: 'assignment',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: `Assignment successfully reassigned with new due date ${newDueDate}. Previous progress preserved.`,
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 13. POST Delegate Reviewer (Feature 5: Assign and reassign reviewers, restrict submissions)
  if (pathname === '/api/training/delegate-reviewer' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { assignmentId, employeeId, reviewerId, reviewerName, delegatedBy, notes } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === assignmentId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Assignment not found.' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.reviewerId = reviewerId;
    training.reviewerName = reviewerName;
    training.reviewerDelegatedBy = delegatedBy || 'Admin';
    training.reviewerDelegatedAt = `${dateStr}, ${timeStr}`;

    if (!training.auditHistory) training.auditHistory = [];
    training.auditHistory.unshift({
      date: `${dateStr}, ${timeStr}`,
      action: 'Reviewer Delegated',
      user: delegatedBy || 'Admin',
      notes: `Assigned evaluation authority to ${reviewerName}. ${notes || ''}`
    });

    return sendJson(res, 200, {
      success: true,
      message: `Reviewer successfully delegated to ${reviewerName}.`,
      training: training
    });
  }

  // 14. POST Send Certificate Expiry Reminder (Feature 2)
  if (pathname === '/api/training/certificate/send-reminder' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { certificateId, employeeId } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    const training = store.trainings.find(t => (t.certificate && t.certificate.id === certificateId) || t.id === body.assignmentId);
    const certName = (training && training.certificate && training.certificate.name) || (training && training.trainingName) || 'Certificate';
    const expiry = (training && training.certificate && training.certificate.expiryDate) || 'Expiring soon';

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Certificate Expiry Reminder',
      message: `Reminder: Your certification "${certName}" is scheduled to expire (${expiry}). Please complete refresher training to renew your credential.`,
      type: 'warning',
      timestamp: `${dateStr}, ${timeStr}`,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: `Expiry reminder dispatched to ${store.profile.name}.`
    });
  }

  // 15. POST Assign Refresher Training (Feature 2)
  if (pathname === '/api/training/certificate/assign-refresher' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { certificateId, employeeId, programId, assignedBy, dueDate } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    // Check employee active status
    if (store.profile && (store.profile.status === 'inactive' || store.profile.status === 'exited')) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot assign refresher training: Employee profile is inactive / exited.'
      });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const defaultDue = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    const progMeta = programId ? TRAINING_PROGRAMS_REGISTRY[programId] : null;
    const progVersion = (progMeta && progMeta.version) || 1;

    const refresherAssignment = {
      id: `TRN-REFR-${Date.now().toString().slice(-4)}`,
      programId: programId || 'TR-101',
      programVersion: progVersion,
      trainingName: body.trainingName || 'Compliance Refresher',
      category: body.category || 'Governance & Compliance',
      shortDescription: `Refresher training for certificate renewal (${certificateId || 'Existing'}).`,
      isMandatory: true,
      isRefresher: true,
      refresherForCertId: certificateId,
      assignedBy: assignedBy || 'Isha Patel (Head of People)',
      assignedDate: dateStr,
      dueDate: dueDate || defaultDue,
      startDate: null,
      completionPercentage: 0,
      trainingStatus: 'not_started',
      status: 'Not Started',
      resources: [],
      assessment: null,
      submission: { completionRemarks: '', evidenceFiles: [], submittedAt: null, isLocked: false },
      review: null,
      certificate: null // New certificate only issued AFTER approval
    };

    store.trainings.unshift(refresherAssignment);
    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Refresher Training Assigned',
      message: `A certificate renewal refresher course has been assigned to you. Due Date: ${refresherAssignment.dueDate}.`,
      type: 'assignment',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: refresherAssignment.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: 'Refresher training successfully assigned. Certificate will be renewed upon completion and approval.',
      assignment: refresherAssignment,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 16. POST Update Employee Status (Feature 3: Exit handling)
  if (pathname === '/api/employee/status' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, status, exitDate, reason } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    if (!['active', 'inactive', 'exited'].includes(status)) {
      return sendJson(res, 400, { success: false, message: 'Invalid status. Must be active, inactive, or exited.' });
    }

    store.profile.status = status;
    if (exitDate) store.profile.exitDate = exitDate;
    if (reason) store.profile.exitReason = reason;

    return sendJson(res, 200, {
      success: true,
      message: `Employee status updated to ${status}. All historical training records and certificates preserved.`,
      employee: store.profile
    });
  }

  // 17. POST Training Program Update & Version Management (Feature 4)
  if (pathname === '/api/training/program-update' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { programId, title, dept, difficulty, durationHours, passScore, status } = body;

    let prog = TRAINING_PROGRAMS_REGISTRY[programId];
    if (!prog) {
      prog = { id: programId, title, version: 1, versions: [], status: status || 'published' };
      TRAINING_PROGRAMS_REGISTRY[programId] = prog;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    // If already published and updating, create new version snapshot
    if (prog.status === 'published' && status === 'published') {
      const { versions: _v, ...progSnapshot } = prog;
      prog.versions.push({
        version: prog.version,
        title: prog.title,
        updatedAt: dateStr,
        snapshot: JSON.parse(JSON.stringify(progSnapshot))
      });
      prog.version = (prog.version || 1) + 1;
    }

    Object.assign(prog, body);

    return sendJson(res, 200, {
      success: true,
      message: `Programme updated to version v${prog.version}. Existing employee assignments remain linked to their original version without progress reset.`,
      program: prog
    });
  }

  // ===========================================================================
  // STATIC ASSETS & SPA ROUTING
  // ===========================================================================
  let reqPath = pathname;
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(__dirname, reqPath);

  // Fallback to index.html for SPA client-side routes
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(__dirname, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Internal Server Error: ${err.code}`);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 CollabCRM Training Module running at http://localhost:${PORT}`);
});
