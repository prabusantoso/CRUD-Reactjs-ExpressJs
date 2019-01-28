import React, {Component} from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

class Siswa extends Component{
    constructor(){
        super()
        this.state ={
            siswa: []
        }
    }

    componentDidMount() {
        this.getInitialData()
    }

    getInitialData () {
        axios.get('http://localhost:3000/siswas').then(res => {
            this.setState({siswa:res.data.data})
        }).catch(err => console.log(err))
    }
    handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:3000/siswas/${id}`)
                .then(res => {
                    this.getInitialData();
                }).catch(err => console.log(err))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    handleEdit = (id) => {
        this.props.history.push(`/siswa/edit/${id}`)
    }
    render() {
        return(
            <div>
                <h1>Data Siswa</h1>
                {/* penulisan membuat button */}
                <Link to="/siswa/create" className="btn btn-primary">Tambah Siswa</Link>
                    <table className="table">
                        <thead>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Kelas</th>
                            <th>Aksi</th>
                        </thead>
                        <tbody>
                            {
                                this.state.siswa.map((data,index)=> {
                                    return (
                                        <tr>
                                            <td>{data.nama}</td>
                                            <td>{data.alamat}</td>
                                            <td>{data.kelas}</td>
                                            <td>
                                              <button 
                                                 className ="btn btn-warning"
                                                 onClick={() => this.handleEdit(data.id)}
                                                 >
                                                 Edit
                                              </button>
                                              <button 
                                                 className ="btn btn-danger"
                                                 onClick={() => this.handleDelete(data.id)}
                                                 >
                                                 Delete
                                              </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}
export default Siswa