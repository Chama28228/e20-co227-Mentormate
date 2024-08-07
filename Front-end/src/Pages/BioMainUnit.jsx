import React from 'react';
import Navbar from '../Components/Navbar';
import UnitCard from '../Components/unitCard'
import unit1 from '../assets/unit1.png';
import unit2 from '../assets/unit2.jpg';
import unit3 from '../assets/unit3.jpg';
import unit4 from '../assets/unit4.jpg';
import unit5 from '../assets/unit5.jpg';
import unit6 from '../assets/unit6.jpg';
import unit7 from '../assets/unit7.jpg';
import unit8 from '../assets/unit8.jpg';
import unit9 from '../assets/unit9.jpg';
import unit10 from '../assets/unit10.jpg';
import './BioMainUnit.css';

function BioMainUnit() {
    return (
        <>
           <Navbar/> 
           <div className="card-container">
               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}> 
                    <UnitCard imageSrc={unit1} text="Unit 01: Introduction to Biology" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit2} text="Unit 02: Chemical and Cellular basis of life" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit3} text="Unit 03: Evolution and diversity of organisms" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit4} text="Unit 04: Plant from and function" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit5} text="Unit 05: Animal from and function" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit6} text="Unit 06: Genetics" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit7} text="Unit 07: Molecular Biology and Recombinant DNA Technology" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit8} text="Unit 08: Environment Biology" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit9} text="Unit 09: Microbiology" link="/unit1"/>    
               </div>

               <div className="card-item" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <UnitCard imageSrc={unit10} text="Unit 10: Applied Biology" link="/unit1"/>    
               </div>
          </div>
           
        </>
    );
}

export default BioMainUnit;

