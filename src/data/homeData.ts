export type Status = 'planned' | 'in progress' | 'tested' | 'completed'

export type Word = { word: string; evidence: string; status: Status }
export type Work = {
  code: string
  label: string
  title: string
  status: Status
  role: string
  evidence: string
  to: string
}

export const words: Word[] = [
  { word: 'Collaborative', evidence: 'I work with my UTRGV team on 3D printer defect detection.', status: 'in progress' },
  { word: 'Resourceful', evidence: 'I took apart medical devices to source medical-grade parts for HUNCH.', status: 'in progress' },
  { word: 'Curious', evidence: 'I am designing an 8-bit CPU on my own to learn how computers work.', status: 'in progress' },
]

export const overview =
  `I am a student at Science Academy who loves electronics, especially semiconductor devices. I enjoy learning how hardware works and building things that interest me. Through my UTRGV internship, my team and I research hardware for a 3D printer that uses cameras, sensors, and vision-language-action (VLA) models to find and fix printing mistakes. For NASA HUNCH, I lead the hardware for an AI medical diagnostic system for astronauts, working with circuits and sensors. On my own, I am designing an 8-bit CPU to learn how computers work. These experiences help me grow in CAD, electronics, research, teamwork, and public speaking. After high school, I am considering UTRGV to study Electrical Engineering, earn my bachelor’s and master’s degrees, and possibly pursue a PhD. I am exploring careers in semiconductor engineering, hardware engineering, and embedded systems, in that order. My next steps are to finish my current projects strong, start new ones, and take more opportunities to speak publicly.`

export const goals = [
  { label: 'Colleges', text: 'UTRGV (considering). Add others here.' },
  { label: 'Major', text: 'Electrical engineering: bachelor’s, master’s, maybe a PhD' },
  { label: 'Career', text: 'Semiconductor, then hardware, then embedded systems' },
]

export const works: Work[] = [
  { code: 'U1', label: 'UTRGV research', title: 'VLA-enabled 3D printing', status: 'in progress',
    role: 'My role: hardware research with a team.', evidence: 'Evidence: add approved photo and caption.', to: '/research' },
  { code: 'U2', label: 'NASA HUNCH', title: 'Astronaut medical diagnostics', status: 'in progress',
    role: 'My role: hardware lead.', evidence: 'Evidence: prototype photo and mentor feedback.', to: '/hunch' },
  { code: 'U3', label: 'Personal project', title: '8-bit CPU', status: 'in progress',
    role: 'My role: sole designer.', evidence: 'Evidence: architecture diagram.', to: '/projects' },
]