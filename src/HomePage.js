import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    
  return (
    <div className='HomePage'>
      <div class="parent">
<div class="div1"><h1 className='h1'>BookList Maintenance Form</h1><br></br><h3 className='h3'>Add and view your book using local storage</h3></div>
<div class="div2"> 
<div className="right-side">
<form action="#" className='form-group'>
        <div class="input-box">
        TITLE<br/><input className='form-control' type="text" />
        </div>
        <div class="input-box">
        AUTHOR<br/><input className='form-control' type="text" />
        </div>
        <div class="input-box">
        ISBN#<br/><input className='form-control' type="text" />
        </div>
        <div class="button btn btn-success">
          <input className='btn' type="button" value="ADD" />
        </div>
      </form>
</div>
</div>
<div class="div3">
    <div className='table'>
        <table>
            <tr>
                <td>ISBN#</td>
                <td>Title</td>
                <td>Author</td>
                <td>Delete</td>
            </tr>
            <tr>
                <td>1234</td>
                <td>Harry Potter</td>
                <td>JK Rowling</td>
                <td style={{color:"red"}}>delete</td>
                <br/>
            </tr>
            <tr>
                <td>5462</td>
                <td>Wings Of Fire</td>
                <td>APJ Abdul Kalam</td>
                <td style={{color:"red"}}>delete</td>
                <br/>
            </tr>
            <tr>
                <td></td>
                <td><button className='btn btn-danger' style={{background:"red"}}>RemoveAll</button></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        
    </div>
</div>
</div>
    </div>
  )
}

export default HomePage
