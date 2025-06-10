import React from 'react'
import WorkCard from '../components/WorkCard'
import LinkedInHeadshot from '../assets/LinkedInHeadshot.JPG'
import JumpStart from "../assets/JumpStart2.jpeg"
import NRC from "../assets/NRC2.jpeg"
import CircuitStream from '../assets/circuitStream.jpg'
import { Fade } from "react-awesome-reveal";

const Work = () => {
    const workItems = [
    "I’m currently working with Health Canada to explore how we can better protect patient privacy through data de-identification techniques. My role involves digging into research, analyzing data, and contributing to projects that aim to modernize how health data is handled. I also get to collaborate with teams across different departments, helping shape tools and insights that support smarter public policy and digital innovation.",
    "I led a week-long coding camp where I taught 6 curious kids how to build and code using Scratch and Minecraft Education. Together, we created a full Minecraft city with over 10 unique structures — all programmed by the students themselves! I ran 5 hands-on, interactive coding activities and helped guide each student from their first block of code to a fully finished final project. It was a fun, creative week filled with problem-solving, pixel art, and a lot of enthusiasm.",
    "Over the summer, I facilitated a 7-week tech camp for 39 students, diving into topics like data cleaning, API integration, Python-based recommender bots, and mobile app development using React Native. Alongside supporting the instructor, I managed everything from technical troubleshooting to parent communication and course logistics. Whether it was helping a student debug their chatbot or streamlining attendance and admin tasks, I made sure the learning experience was smooth, engaging, and fun — and we kept a solid 92% attendance rate to show for it!",
    "During my co-op at the NRC, I worked on benchmarking different tools for assembling long-read plant transcriptomes. I got hands-on with advanced transcriptome assemblers like RATTLE and RNA-Bloom, comparing their performance and exploring how they handled complex genome data. I also used Python and R to run statistical analyses and identify trends in plant gene expression — a fun blend of biology, code, and critical thinking that pushed me deeper into the world of research and bioinformatics.",
    "As a UBC Orientation Leader, I helped welcome 27 first-year students into the university community. I worked closely with faculty and fellow leaders to create a supportive, engaging environment where students could connect, ask questions, and feel at home. From running group activities and campus-wide events to hosting regular check-ins and offering peer support, I was there to help students navigate their first few weeks with confidence and a sense of belonging."
  ];

   const workItemsSummary = [
    "Supporting Health Canada’s work on patient data privacy through research and de-identification. Contributing to data analysis and digital policy initiatives.",
    "Led a week-long coding camp teaching Scratch and Minecraft Education to young students. Guided them in building a collaborative Minecraft city through hands-on coding activities.",
    "Facilitated a 7-week tech camp for 39 students covering Python, APIs, data cleaning, and React Native. Managed technical support, parent communication, and course logistics to ensure a smooth and engaging learning experience.",
    "Conducted benchmarking of plant transcriptome assembly tools like RATTLE and RNA-Bloom during a co-op at the NRC. Used Python and R to analyze gene expression data and uncover biological patterns.",
    "Supported 27 first-year students as a UBC Orientation Leader by fostering community and connection. Helped run events, lead group activities, and provide peer support during their transition to university life."
  ];

  const images = [
    LinkedInHeadshot, 
    CircuitStream, 
    LinkedInHeadshot, 
    NRC, 
    JumpStart
  ];

  return (
    <div className='flex flex-col bg-[#0d1117] px-8 py-12 relative min-h-screen items-center justify-center'>
         <div className="flex flex-col relative items-start">
           <div className="absolute left-[1.5rem] top-0 w-[2px] bg-yellow-500 h-full z-20" />
        {workItemsSummary.map((text, idx) => (
          <div key={idx} className="relative flex items-start gap-8 z-10">
            {/* Dot */}
            <div className="w-12 flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-400 rounded-full" />
            </div>

            {/* Animated Card */}
            <Fade cascade damping={0.2} triggerOnce>
              <div className="flex-1">
                <WorkCard
                  title="Co-op Student"
                  date="2023–2025"
                  text={text}
                  fullText={workItems[idx]}
                  image={images[idx]}
                />
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work