class Shape3D {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000 - 500;
        this.rotationX = Math.random() * Math.PI * 2;
        this.rotationY = Math.random() * Math.PI * 2;
        this.rotationZ = Math.random() * Math.PI * 2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.speedZ = (Math.random() - 0.5) * 2;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.02;
        this.size = Math.random() * 20 + 10;
        this.type = Math.random() > 0.5 ? 'cube' : 'pyramid';
        
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
            '#D4A5A5', '#9B59B6', '#3498DB', '#E74C3C', '#2ECC71',
            '#F1C40F', 
            '#1ABC9C',
            '#E67E22', 
            '#BE2EDD', 
            '#0652DD' 
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    project(x, y, z) {
        const perspective = 800;
        const scale = perspective / (perspective + z);
        return {
            x: this.canvas.width/2 + x * scale,
            y: this.canvas.height/2 + y * scale,
            scale: scale
        };
    }

    update() {
        // Update position
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.speedZ;

        // Update rotation
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;

        // Boundary checks
        if (this.x < -this.canvas.width/2 || this.x > this.canvas.width/2) this.speedX *= -1;
        if (this.y < -this.canvas.height/2 || this.y > this.canvas.height/2) this.speedY *= -1;
        if (this.z < -500 || this.z > 500) this.speedZ *= -1;
    }

    rotatePoint(x, y, z) {
        // Rotate around X axis
        let temp = y;
        y = y * Math.cos(this.rotationX) - z * Math.sin(this.rotationX);
        z = temp * Math.sin(this.rotationX) + z * Math.cos(this.rotationX);

        // Rotate around Y axis
        temp = x;
        x = x * Math.cos(this.rotationY) + z * Math.sin(this.rotationY);
        z = -temp * Math.sin(this.rotationY) + z * Math.cos(this.rotationY);

        // Rotate around Z axis
        temp = x;
        x = x * Math.cos(this.rotationZ) - y * Math.sin(this.rotationZ);
        y = temp * Math.sin(this.rotationZ) + y * Math.cos(this.rotationZ);

        return { x, y, z };
    }

    drawCube(ctx) {
    const vertices = [
        { x: -this.size, y: -this.size, z: -this.size },
        { x: this.size, y: -this.size, z: -this.size },
        { x: this.size, y: this.size, z: -this.size },
        { x: -this.size, y: this.size, z: -this.size },
        { x: -this.size, y: -this.size, z: this.size },
        { x: this.size, y: -this.size, z: this.size },
        { x: this.size, y: this.size, z: this.size },
        { x: -this.size, y: this.size, z: this.size }
    ];

    const rotatedVertices = vertices.map(v => {
        const rotated = this.rotatePoint(v.x, v.y, v.z);
        return this.project(
            rotated.x + this.x - this.canvas.width/2,
            rotated.y + this.y - this.canvas.height/2,
            rotated.z + this.z
        );
    });

    const faces = [
        [0,1,2,3], [4,5,6,7], [0,1,5,4],
        [2,3,7,6], [0,3,7,4], [1,2,6,5]
    ];

    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15; // Glow effect

    faces.forEach(face => {
        ctx.beginPath();
        ctx.moveTo(rotatedVertices[face[0]].x, rotatedVertices[face[0]].y);
        face.forEach((vertexIndex, i) => {
            if (i > 0) {
                ctx.lineTo(rotatedVertices[vertexIndex].x, rotatedVertices[vertexIndex].y);
            }
        });
        ctx.closePath();

        // Fill with gradient glow
        let gradient = ctx.createRadialGradient(
            rotatedVertices[face[0]].x, rotatedVertices[face[0]].y, 5,
            rotatedVertices[face[0]].x, rotatedVertices[face[0]].y, this.size * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();
    });
}


    drawPyramid(ctx) {
    const vertices = [
        { x: 0, y: -this.size * 1.5, z: 0 }, // Top
        { x: -this.size, y: this.size, z: -this.size }, // Base
        { x: this.size, y: this.size, z: -this.size },
        { x: this.size, y: this.size, z: this.size },
        { x: -this.size, y: this.size, z: this.size }
    ];

    const rotatedVertices = vertices.map(v => {
        const rotated = this.rotatePoint(v.x, v.y, v.z);
        return this.project(
            rotated.x + this.x - this.canvas.width/2,
            rotated.y + this.y - this.canvas.height/2,
            rotated.z + this.z
        );
    });

    const faces = [
        [0,1,2], [0,2,3], [0,3,4], [0,4,1], [1,2,3,4]
    ];

    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15; // Glow effect

    faces.forEach(face => {
        ctx.beginPath();
        ctx.moveTo(rotatedVertices[face[0]].x, rotatedVertices[face[0]].y);
        face.forEach((vertexIndex, i) => {
            if (i > 0) {
                ctx.lineTo(rotatedVertices[vertexIndex].x, rotatedVertices[vertexIndex].y);
            }
        });
        ctx.closePath();

        // Fill with gradient glow
        let gradient = ctx.createRadialGradient(
            rotatedVertices[face[0]].x, rotatedVertices[face[0]].y, 5,
            rotatedVertices[face[0]].x, rotatedVertices[face[0]].y, this.size * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();
    });
}


    draw(ctx) {
        if (this.type === 'cube') {
            this.drawCube(ctx);
        } else {
            this.drawPyramid(ctx);
        }
    }
}

function init3DShapes() {
    const canvas = document.createElement('canvas');
    canvas.id = 'shapes3DCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    const shapes = [];
    const numberOfShapes = 5;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create shapes
    for (let i = 0; i < numberOfShapes; i++) {
        shapes.push(new Shape3D(canvas));
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    canvas.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - canvas.width/2;
        mouseY = e.clientY - canvas.height/2;
        
        shapes.forEach(shape => {
            const dx = mouseX - shape.x;
            const dy = mouseY - shape.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
                shape.rotationSpeedY += dx * 0.00001;
                shape.rotationSpeedX += dy * 0.00001;
            }
        });
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Sort shapes by Z position for proper depth rendering
        shapes.sort((a, b) => b.z - a.z);
        
        shapes.forEach(shape => {
            shape.update();
            shape.draw(ctx);
        });
        
        requestAnimationFrame(animate);
    }

    animate();
}

// Initialize when the page loads
window.addEventListener('load', init3DShapes);