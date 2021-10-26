import React from 'react'
import students from '../../data/students'

const list = students.map(student => {
    const {id, name, grade} = student
    return (
        <li key={id} style={{ listStyle: 'none' }}>
            {id + 1}) {name}: {grade}
        </li>
    )
})

export default () => {
    return (
        <ul>
            {list}
        </ul>
    )
}