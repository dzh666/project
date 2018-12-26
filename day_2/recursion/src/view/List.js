import React, { Component } from 'react';

class List extends Component {
    render() {
        let {
            list
        }=this.props
       // console.log(list)
        return (
            <div>
                {
                    list&&list.map((v,i)=>{
                        return <div key={i} style={{marginLeft:'10px'}}>
                            <p>{v.title}</p>
                            {
                                v.children && <List list={v.children}/>
                            }
                        </div>
                    })
                }
            </div>
        );
    }
}

export default List;