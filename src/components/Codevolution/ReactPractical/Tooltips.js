import React,{forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColorTooltip=()=>{
    return <span style={{color:'orange'}}>Colored Component</span>
}

const CustomComp=forwardRef((props, ref)=>{
    return(
        <div ref={ref} style={{border:'1px solid yellow'}}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})

function Tooltips() {
    return (
        <div>
            <main style={{paddingBottom:'20px'}}>
            <Tippy content='this is basic tooltip'>
            <button>Tooltip</button>
            </Tippy>
            </main>

            <main style={{paddingBottom:'20px'}}>
            <Tippy arrow={false} placement='right' delay={1000} content={<span style={{color:'yellow'}}>Colored tooltip</span>}>
            <button>Tooltip Colored Aroow removed placed right with delay 1s</button>
            </Tippy>
            </main>

            <main style={{paddingBottom:'20px'}}>
            <Tippy content={<ColorTooltip/>}>
            <button>Tooltip Colored</button>
            </Tippy>
            </main>

            <main style={{paddingBottom:'20px'}}>
            <Tippy content='tooltip for content'>
            <span>This is content tooltip</span>
            </Tippy>
            </main>

            <main style={{paddingBottom:'20px'}}>
            <Tippy content='tooltip for custome component placement top-end' placement='top-end'>
            <CustomComp/>
            </Tippy>
            </main>            

        </div>
    )
}

export default Tooltips
