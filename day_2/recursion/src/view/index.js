import React, { Component } from 'react';
import List from './List'
let list=[
    {
        title:'第一级',
        children:[
            {
                title:'第二级',
            }
        ]
    },
    {
        title:'第一级',
        children:[
            {
                title:'第二级',
                children:[
                    {
                        title:'第三级',
                    }
                ]
            }
        ]
    },
    {
        title:'第一级',
    }

]
class Index extends Component {
    render() {
        return (
          <List list={list}/>
        );
    }
}

export default Index;