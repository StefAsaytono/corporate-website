import React from "react"
import { Container } from "react-bootstrap"

const $ = require('jquery');
$.DataTable = require('datatables.net');

$(document).ready((function () {
    $('#outlet_table').DataTable({
        searching: false,
        ordering: false,
        "dom" : 'rtip'
    })
}))

const OutletContent = () => {
    let outlets = [
        {
            site: "KGI Lucky U Inc. San Rafael Tarlac City FW",
            address: "City Mall Tarlac Mcarthur Highway Brgy San Rafael Tarlac City",
        },
        {
            site: "KGI Lucky U Inc. Abucay Bataan FW",
            address: "Uni-Oil Calaylayan Abucay Bataan",
        },
        {
            site: "KGI T2Raf Electronic Gaming Station Inc FW",
            address: "EBY Ventures Building Zamora St Brgy San Roque Tarlac City",
        },
        {
            site: "KGI Pinoygames Gaming and Amusement Corporation FW",
            address: "GF ValleyFair Town Center San Juan Brgy San Isidro Ortigas Ave Extn Taytay Rizal",
        },
        {
            site: "KGI T2Raf Electronic Gaming Station Inc II FW",
            address: "EBY Ventures Building Zamora St Brgy San Roque Tarlac City",
        },
        {
            site: "KGI Betwin Tech Services Inc - Rosales Pangasinan FW II",
            address: "Old PNG Bldg Carmen West Rosales Pangasinan",
        },
        {
            site: "KGI Three As Bingo Ventures Inc. Golf FW",
            address: "Golf - RPC Building DRT - Maharlika Highway Tarcan Baliwag Bulacan",
        },
        {
            site: "KGI T2Raf Electronic Gaming Station Inc. Tuba Benguet FW",
            address: "Valerios Place Marcos Highway Tuba Benguet",
        },
        {
            site: "KGI Fastplay Leisure Inc. FW II",
            address: "Level 1 Robinsons Place J. Catolico Ave. Brgy. Lagao General Santos City",
        },
        {
            site: "KGI Lucky U Inc. FW II",
            address: "Brgy. Ala Uli Pilar Bataan",
        },
        {
            site: "KGI Paul JS Gaming Station Inc. Antipolo City FW",
            address: "23 Sumulong Highway Mayamot Antipolo City",
        },
        {
            site: "KGI Fastplay Leisure Inc. FW",
            address: "Level 1, Robinsons Place, J.Catolico Ave. Brgy. Lagao, General Santos City",
        },
        {
            site: "FASTWIN Toledo Cebu A",
            address: "Commercial Arcade Fort Area Poblacion Toledo City",
        },
        {
            site: "FASTWIN Toledo Cebu B",
            address: "RGK Plaza Center, Colis Street Tabunok, City of Talisay, Cebu",
        },
        {
            site: "FASTWIN Toledo Cebu C",
            address: "Door 2 Rosalie Arcade Bldg., Hi-way Tabunok, Talisay City Cebu",
        },
        {
            site: "KGI SHL Amusement FW",
            address: "3/F U04-06, Newpoint Entec 2, Nepo Mart Complex, Teresa Ave., Santo Rosario, Angeles City,Pampanga",
        },
        {
            site: "Fastwin Radiant Bay Angono Rizal",
            address: "Xentro Mall Angono, M.L Quezon Ave., Brgy. San Pedro, Angono Rizal",
        },
        {
            site: "Fastwin Radiant Bay Angono Rizal II",
            address: "Xentro Mall Angono, M.L Quezon Ave., Brgy. San Pedro, Angono Rizal",
        },
        {
            site: "Fastwin Big A Gaming Roosevelt",
            address: "143 Roosevelt Avenue Barangay Paraiso San Francisco Del Monte District 1 Quezon City",
        },
        {
            site: "Fastwin Big A Gaming Roosevelt II",
            address: "143 Roosevelt Avenue Barangay Paraiso San Francisco Del Monte District 1 Quezon City",
        },
        {
            site: "Fastwin WR Gaming and Entertaiment Corp",
            address: "186 Tomas Morato Ave Quezon City",
        },
        {
            site: "KGI IPalace Corp Calamba Laguna",
            address: "55KM National Highway, Bucal, Calamba, Laguna",
        },
        {
            site: "KGI Pinoygames Gaming and Amusement Corporation Manila",
            address: "Unit P Moca Commercial Square Aloha Hotel Quirino Ave cor Roxas Blvd Malate Manila",
        },
        {
            site: "KGI Belaggio Amusement Games and Arcade Park Corp - Quezon City FW",
            address: "Fisher Mall Quezon Avenue Quezon City",
        },
        {
            site: "KGI LYAM Corporation Marikina FW",
            address: "Unit 101 and 102 Guerdon Bldg Rainbow St cor Katipunan St Brgy Concepcion Dos Markina",
        },
        {
            site: "KGI ParknPlay Virtual Gaming Corporation San Miguel Bulacan FW",
            address: "Unit 7-8-9-10 RDDC Centro Commercial Camias San Miguel Bulacan 3011",
        },
        {
            site: "KGI New All Star Masinag Gaming Corp Antipolo FW",
            address: "G F Tripolee Bldg Brgy Mayamot Antipolo City",
        },
        {
            site: "KGI La Fuerza Amusement Center Inc Sta Maria Bulacan FW",
            address: "2F BLC Bldg. Dulong Bayan Santa Maria, Bulacan",
        },
        {
            site: "KGI Pedrera Computer System Inc Cainta Rizal FW",
            address: "2nd level, Phase 1 sta lucia east grand mall, marcos highway cor. felix ave. Cainta Rizal",
        },
        {
            site: "KGI Allstar E Games Corp Las Piñas City FW",
            address: "2F 3F Starmall CV Starr ave Philamlife Village Pamplona dos Las Piñas City",
        },
        {
            site: "KGI AllStar E Games corp San Jose Del Monte, Bulacan FW",
            address: "Ground flr. G-13 StarMall BRGY Kaypian San Jose Del Monte Bulacan",
        },
        {
            site: "KGI AllStar E Games corp Sta. Rosa City, Laguna FW",
            address: "Ground Flr. 148A G/L VistaMall Sta. Rosa-Tagaytay Rd. Brgy. Sto. Domingo Sta. Rosa City Laguna",
        },
        {
            site: "KGI Reinway Corporation Balagtas Bulacan FW",
            address: "Anahaw Restaurant, KM 32 McArthur Highway, Sitio Tiwala, Burol 1st, Balagtas, Bulacan",
        },
        {
            site: "KGI Adelante Gaming Enterprise Corp CDO City FW",
            address: "G-07 Uptown Condotel FR Masterson Ave. Xavier Estates CDO City",
        },
        {
            site: "KGI Mystic Mat Gaming Amusement Corp Las Pinas FW",
            address: "32 Alabang Zapote Road Cor Auburn Place Subd Talon Uno Las Pinas",
        }
    ]

    return(
        <>
            <section className="outlet">
                <div className="outlet__banner__padding">
                    <div className="outlet__banner"></div>
                </div>
                <Container className="outlet__container">
                    <h1 className="text-center text-white outlet__h1" data-aos="zoom-in" data-aos-duration="3000">Our Outlets</h1>
                    <div className="outlet__content p-5" data-aos="fade-up" data-aos-duration="3000">
                        <table className="table text-start" id="outlet_table" >
                            <thead>
                                <tr>
                                    <th scope="col" className="text-white">#</th>
                                    <th scope="col" className="text-white">Outlet Name</th>
                                    <th scope="col" className="text-white">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                outlets.sort((a,b) => a.site > b.site ? 1: -1).map((outlet, index) => {
                                    return(
                                        <tr key={index}>
                                            <th scope="row" className="text-white">{index+1}</th>
                                            <td className="text-white">{outlet.site}</td>
                                            <td className="text-white">{outlet.address}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default OutletContent