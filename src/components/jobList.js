import React from 'react'

export default function jobList(props) {
    return (
   
         
             <div className="col-sm-12 text-center">
               {props.jobs.map((item, index) => {
                 return (
                   <div className="row" key={item.id}  style={{backgroundColor: index % 2 ?   '#fafafa' : '#fff'}} >
                     <div className="col-md-6 text-left p-2 pl-4">
                       {item.job}
                     </div>
                     <div className="col-md-3 text-left p-2 pl-4">
                       {item.company}
                     </div>
                     <div className="col-md-3 text-left p-2 pl-4">
                       {item.domain}
                     </div>
                   </div>
                 );
               })}
             </div>
   
 

    )
}
