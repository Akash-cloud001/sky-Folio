import React, { useEffect, useRef } from 'react'
import myPic from '../../assets/images/me2Enhanced.png';
import { imgBase64 } from '../../assets/images/ImgString';
const Canvas = () => {

    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth / 3;
        canvas.height = window.innerHeight / 1.5;
        const cxt = canvas.getContext('2d');
        
        
        const PARTICLE_DIAMETER = 5;
        const particles = [];

        const img = new Image();
        img.src = imgBase64;
        cxt.fillStyle = 'rgba(255,0,0,0.3)';
        cxt.fillRect(0,0,canvas.width,canvas.height);

        img.addEventListener('load',(e)=>{
            cxt.drawImage(img, 0,0,canvas.width, canvas.height);
            const imgData = cxt.getImageData(0,0, img.width, img.height).data;

            const numRows = Math.round(img.height / PARTICLE_DIAMETER);
            const numCols = Math.round(img.width / PARTICLE_DIAMETER);

            for(let r = 0; r < numRows; r++){
                for(let c = 0; c < numCols; c++){
                    const pixelIdx = (r * PARTICLE_DIAMETER * img.width + c * PARTICLE_DIAMETER) * 4;

                    const red = imgData[pixelIdx];
                    const green = imgData[pixelIdx+1];
                    const blue = imgData[pixelIdx+2];
                    const alpha = imgData[pixelIdx+3];

                    particles.push(
                        {
                            x : c * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
                            y : r * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
                            originX : c * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
                            originY : r * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
                            color : `rgba(${red}, ${green}, ${blue}, ${alpha})`
                        }
                    );
                }
            }

            const mouse = {
                x : Infinity,
                y : Infinity
            }


            function updateParticles(){
                const REPEL_RADIUS = 50;
                const REPEL_SPEED = 5;
                const RETURN_SPEED = 0.1;


                particles.forEach((particle)=>{
                    const distanceFromMouseX = mouse.x - particle.x;
                    const distanceFromMouseY = mouse.y - particle.y;
                    const distanceFromMouse = Math.sqrt(
                        distanceFromMouseX ** 2 + distanceFromMouseY ** 2
                    );
                    if(distanceFromMouse < REPEL_RADIUS){
                        const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
                        const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS;
                        const moveX = Math.cos(angle) * force * REPEL_SPEED;
                        const moveY = Math.sin(angle) * force * REPEL_SPEED;

                        particle.x -= moveX;
                        particle.y -= moveY;
                    }
                    else if(
                        particle.x !== particle.originX ||
                        particle.y !== particle.originY
                    ){
                        const distanceFromOriginX = particle.originX - particle.x;
                        const distanceFromOriginY = particle.originY - particle.y;
                        const distanceFromOrigin = Math.sqrt(
                            distanceFromOriginX ** 2 + distanceFromOriginY ** 2
                        );
                        const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
                        const moveX = Math.cos(angle) * distanceFromOrigin * RETURN_SPEED;
                        const moveY = Math.sin(angle) * distanceFromOrigin * RETURN_SPEED;

                        particle.x += moveX;
                        particle.y += moveY;
                    }
                })
            }

            function drawParticles(){
                updateParticles();
                cxt.clearRect(0,0, canvas.width, canvas.height);

                //lets draw the particles;
                particles.forEach((particle) =>{
                    cxt.beginPath();
                    cxt.arc(particle.x, particle.y, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI);
                    cxt.fillStyle = particle.color;
                    cxt.fill();
                });
                requestAnimationFrame(drawParticles);
            }
            drawParticles();
            
            
            
            // Adding Event
            canvas.addEventListener('mousemove', (event)=>{
                mouse.x = event.offsetX;
                mouse.y = event.offsetY;
                console.log(mouse.x, mouse.y)
            });

            //removing event
            canvas.addEventListener('mouseleave', (event)=>{
                mouse.x = Infinity;
                mouse.y = Infinity;
            });

        });

    },[]);
  return (
    <canvas ref={canvasRef}>

    </canvas>
  )
}

export default Canvas;



