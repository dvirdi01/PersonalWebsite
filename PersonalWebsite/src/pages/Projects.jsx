import React from 'react'
import LinkedInHeadshot from '../assets/LinkedInHeadshot.JPG'
import GitHub from '../assets/image.png'
import ProjectCard from '../components/ProjectCard'
import Chico from '../assets/chico.jpg'
import TelephoneHut from '../assets/TelephoneHut.jpg'
import Water from '../assets/Water-Predictor.jpg'
import Echoprep from '../assets/echoprep.jpg'

const Projects = () => {

   return (
    <div className='px-24 py-12 min-h-screen'>
        <div className='grid grid-cols-3 gap-8'>
        <ProjectCard title = "Telephone Hut" description="lorem ipsum shjsn jssnjksn  jsjsknajnj " image = {TelephoneHut} link = "haha"/>
        <ProjectCard title = "Water Potability Predictor" description="lorem ipsum shjsn jssnjksn  jsjsknajnj " image = {Water} link = "haha"/>
        <ProjectCard title = "Chico" description="lorem ipsum shjsn jssnjksn  jsjsknajnj " image = {Chico} link = "haha"/>
        <ProjectCard title = "VisionBoard Maker" description="lorem ipsum shjsn jssnjksn  jsjsknajnj " image = {GitHub} link = "haha"/>
        <ProjectCard title = "EchoPrep" description="lorem ipsum shjsn jssnjksn  jsjsknajnj " image = {Echoprep} link = "haha"/>

        </div>
    </div>
   
   )
}

export default Projects
