import React from 'react';

class Table extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const table = (this.props.data == null) ? null : (
					<table>
					<thead>
						<tr>
							<th>Nama</th>
							<th>NIM TPB</th>
							<th>NIM Jurusan</th>
							<th>Prodi</th>
						</tr>
					</thead>
					<tbody>
					{
						this.props.data.map(
							(row) =>
							<tr>
								<td key={row.name}>{row.name}</td>
				    			<td key={row.nim_tpb}>{row.nim_tpb}</td>
				    			<td key={row.nim_jur+row.nim_tpb}>{row.nim_jur}</td>
				    			<td key={row.nim_tpb+row.prodi}>{row.prodi}</td>
		  					</tr>
						)
					}
					</tbody>
		  			</table>)
		return (
			<div>
	  		{table}
			</div>
			)
	}
}

export default Table;