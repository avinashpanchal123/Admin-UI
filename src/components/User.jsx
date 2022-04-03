import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function User({name, email, role}) {
  return (
    <>
     <div className='flex_container'>
    <div className='check_div'>
        <input type="checkbox" name="" id="" />
    </div>
    <div>
        <p>{name}</p>
    </div>
    <div>
        <h3>{email}</h3>
    </div>
    <div>
        <h3>{role}</h3>
    </div>
    <div>
    <Button startIcon={<DeleteIcon />}>
        </Button>
    </div>
    </div>
    </>
  )
}
