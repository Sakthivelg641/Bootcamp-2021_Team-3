import * as React from 'react';
import "../../components/../styles/Resume.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "./Flex" ;
import Btn from "./Btn";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from "./Logo"



const Resume=() =>{
    
    const title = "Upload your resume"
    const steps = " 4 " 
    return(
        
        <div className="ms-5 me-5 mt-3">
        
           <div className="div-zero">
                <Logo />
                    <div className="mt-3">
                        <ProgressBar  completed="20"  bgColor="black" height="14px" labelColor="black"/>
                    </div>
            </div>
            <br />
             <Flex title = {title} steps={steps}/>

            <div className="resume-quote">
                <h4>“Your resume says a lot about you”</h4>
                <p>Upload your resume here</p>
            </div>

            <div className="box-grid">
            <Box component="span" sx={{ p: 8, border:'1px dashed grey' }}>
                <Button>Drop your files here</Button>
            </Box>
            
            </div>
            
            <Btn />
            </div>

    );
};

export default Resume;

