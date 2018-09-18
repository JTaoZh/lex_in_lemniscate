import { Client } from "boardgame.io/react";
import { Game } from 'boardgame.io/core';
import React from 'react';
import './App.css';

const LiL = Game({
    setup: () => ({

    }),

    moves: {

    }
})

class LiLBoard extends React.Component {

    s3 = Math.sqrt(3);
    radix = 15;
    center = {x:200,y:200};
    cells = new Map();
    refers = new Map();

    constructor(){
        super();

        this.cells.set(17,{count:4, points:[
            {x:this.radix+this.center.x, y:0+this.center.y},
            {x:0+this.center.x, y:-this.radix*this.s3+this.center.y},
            {x:-this.radix+this.center.x, y:0+this.center.y},
            {x:0+this.center.x, y:this.radix*this.s3+this.center.y}
          ]});
    
    
    // 上半部分
          this.cells.set(1,{count:4, points:[
            {x:this.cells.get(17).points[1].x+2*this.radix, y:this.cells.get(17).points[1].y},
            {x:this.cells.get(17).points[0].x, y:this.cells.get(17).points[0].y-2*this.s3*this.radix},
            this.cells.get(17).points[1],
            this.cells.get(17).points[0],
          ]})
    
          for(let i=2;i<=4;i++){
            this.cells.set(i, {count:4, points:[
              {x:this.cells.get(i-1).points[1].x+2*this.radix, y:this.cells.get(i-1).points[1].y},
              {x:this.cells.get(i-1).points[0].x, y:this.cells.get(i-1).points[0].y-2*this.s3*this.radix},
              this.cells.get(i-1).points[1],
              this.cells.get(i-1).points[0],
            ]})
          }
    
          this.cells.set(5,{count:3, points:[
            {x:this.cells.get(4).points[0].x+2*this.radix, y:this.cells.get(4).points[1].y-2*this.radix},
            this.cells.get(4).points[1],
            this.cells.get(4).points[0],
          ]})
    
          this.cells.set(6, {count:3, points:[
            this.cells.get(5).points[0],
            {x:this.cells.get(5).points[1].x, y:this.cells.get(5).points[0].y},
            this.cells.get(5).points[1],
          ]})
    
          this.cells.set(7, {count:4, points:[
            this.cells.get(6).points[1],
            {x:this.cells.get(6).points[1].x-2*this.radix, y:this.cells.get(6).points[1].y},
            {x:this.cells.get(6).points[1].x-2*this.radix, y:this.cells.get(6).points[2].y},
            this.cells.get(6).points[2]
          ]})
    
          for(let i=8;i<=10;i++){
            this.cells.set(i, {count:4, points:[
              this.cells.get(i-1).points[1],
              {x:this.cells.get(i-1).points[1].x-2*this.radix, y:this.cells.get(i-1).points[1].y},
              {x:this.cells.get(i-1).points[2].x-2*this.radix, y:this.cells.get(i-1).points[2].y},
              this.cells.get(i-1).points[2]
            ]})
          }
    
          this.cells.set(11, {count:3, points:[
            this.cells.get(10).points[1],
            {x:this.cells.get(10).points[1].x-3*this.radix, y:this.cells.get(10).points[1].y},
            this.cells.get(10).points[2]
          ]})
    
          for(let i=16;i>=13;i--){
            this.cells.set(i, {count:4, points:[
              this.cells.get(i+1).points[1],
              {x:this.cells.get(i+1).points[2].x, y:this.cells.get(i+1).points[2].y-2*this.s3*this.radix},
              {x:this.cells.get(i+1).points[1].x-2*this.radix, y:this.cells.get(i+1).points[1].y},
              this.cells.get(i+1).points[2]
            ]})
          }
    
          this.cells.set(12, {count:3, points:[
            {x:this.cells.get(11).points[2].x, y:this.cells.get(11).points[2].y},
            this.cells.get(11).points[1],
            this.cells.get(13).points[2],
          ]})
    
    // 下半部分
          this.cells.set(18,{count:4, points:[
            {x:this.cells.get(17).points[3].x+2*this.radix, y:this.cells.get(17).points[3].y},
            this.cells.get(17).points[0],
            this.cells.get(17).points[3],
            {x:this.cells.get(17).points[0].x, y:this.cells.get(17).points[0].y+2*this.s3*this.radix},
          ]})
    
          for(let i=19;i<=21;i++){
            this.cells.set(i, {count:4, points:[
              {x:this.cells.get(i-1).points[3].x+2*this.radix, y:this.cells.get(i-1).points[3].y},
              this.cells.get(i-1).points[0],
              this.cells.get(i-1).points[3],
              {x:this.cells.get(i-1).points[0].x, y:this.cells.get(i-1).points[0].y+2*this.s3*this.radix},
            ]})
          }
    
          this.cells.set(22,{count:3, points:[
            {x:this.cells.get(21).points[0].x+2*this.radix, y:this.cells.get(21).points[3].y+2*this.radix},
            this.cells.get(21).points[0],
            this.cells.get(21).points[3],
          ]})
    
          this.cells.set(23, {count:3, points:[
            this.cells.get(22).points[0],
            this.cells.get(22).points[2],
            {x:this.cells.get(22).points[2].x, y:this.cells.get(22).points[0].y},
          ]})
    
          this.cells.set(24, {count:4, points:[
            this.cells.get(23).points[1],
            {x:this.cells.get(23).points[1].x-2*this.radix, y:this.cells.get(23).points[1].y},
            {x:this.cells.get(23).points[1].x-2*this.radix, y:this.cells.get(23).points[2].y},
            this.cells.get(23).points[2]
          ]})
    
          for(let i=25;i<=27;i++){
            this.cells.set(i, {count:4, points:[
              this.cells.get(i-1).points[1],
              {x:this.cells.get(i-1).points[1].x-2*this.radix, y:this.cells.get(i-1).points[1].y},
              {x:this.cells.get(i-1).points[2].x-2*this.radix, y:this.cells.get(i-1).points[2].y},
              this.cells.get(i-1).points[2]
            ]})
          }
    
          this.cells.set(28, {count:3, points:[
            this.cells.get(27).points[1],
            {x:this.cells.get(27).points[1].x-3*this.radix, y:this.cells.get(27).points[2].y},
            this.cells.get(27).points[2]
          ]})
    
          this.cells.set(34, this.cells.get(17))
    
          for(let i=33;i>=30;i--){
            this.cells.set(i, {count:4, points:[
              this.cells.get(i+1).points[3],
              this.cells.get(i+1).points[2],
              {x:this.cells.get(i+1).points[3].x-2*this.radix, y:this.cells.get(i+1).points[3].y},
              {x:this.cells.get(i+1).points[2].x, y:this.cells.get(i+1).points[2].y+2*this.s3*this.radix},
            ]})
          }
    
          this.cells.set(29, {count:3, points:[
            this.cells.get(30).points[3],
            this.cells.get(30).points[2],
            this.cells.get(28).points[1],
          ]})
    
        console.log(this.cells)
    }

    componentDidMount() {
        this.updateCells();
    }

    componentDidUpdate() {
        this.updateCells();
    }

    updateCells() {
        for(let i=1;i<=33;i++){
            let ctx = this.refers.get(i).getContext('2d');
            let points=this.cells.get(i).points;
            let count=this.cells.get(i).count;

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for(let j=1;j<count;j++){
                ctx.lineTo(points[j].x, points[j].y)
            }
            ctx.closePath();
            ctx.stroke();
        }
    }

  
    render() {
        const items = [];
        for(let i=1;i<=33;i++){
            items.push(
                <canvas 
                    key={i} 
                    ref={ref=>this.refers.set(i,ref)} 
                    className="board" 
                    width="400" 
                    height="400"
                ></canvas>  
            )
        }

        return (
            <div>                
                {items}
            </div>
        );
    }
}

const App = Client({ 
    game: LiL,
    board: LiLBoard,
});

export default App;


