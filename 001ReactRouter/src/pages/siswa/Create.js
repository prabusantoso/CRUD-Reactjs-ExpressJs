import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

class SiswaCreate extends Component{
  constructor() {
    super()

    this.state = {
        nama: "",
        alamat: "",
        kelas: ""
    }
}


handleSubmit = (e) => {
    
    const {nama,alamat,kelas} = this.state
    axios.post("http://localhost:3000/siswas",{nama,alamat,kelas})
        .then(res => {
            console.log(res)
            Swal.fire(
                'Good job!',
                'Data Berhsail Di Buat!',
                'success'
              )
            // submit dan redirect ke view sebelumnya
            this.props.history.push('/siswa') 
        })
        .catch(err => console.log(err))
    e.preventDefault()
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}
    render(){
        return (
            <div>
                <h1>Tambah Siswa</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label>Nama</label>
                    <input 
                        name="nama" 
                        value={this.state.nama} 
                        onChange={this.handleChange} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                    <label>Alamat</label>
                    <input 
                        name="alamat" 
                        value={this.state.alamat} 
                        onChange={this.handleChange} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                    <label>Kelas</label>
                    <input 
                        name="kelas" 
                        value={this.state.kelas} 
                        onChange={this.handleChange} 
                        className="form-control" />
                    </div>
                    
                    <button type="submit"className="btn btn-primary">Submit</button>

                </form>
            </div>
        )
    }
}

export default SiswaCreate