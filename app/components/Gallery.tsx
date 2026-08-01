export default function Gallery() {

const images = [

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

"https://images.unsplash.com/photo-1528181304800-259b08848526",

"https://images.unsplash.com/photo-1512453979798-5ea266f8880c",

"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",

"https://images.unsplash.com/photo-1469474968028-56623f02e42e"

];

return (

<section
style={{
padding:"100px 8%",
background:"#fff"
}}
>

<h2
style={{
textAlign:"center",
fontSize:"42px",
marginBottom:"15px"
}}
>
Travel Gallery
</h2>

<p
style={{
textAlign:"center",
color:"#666",
marginBottom:"60px"
}}
>
Beautiful memories from our guests
</p>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
gap:"20px"
}}
>

{images.map((img,index)=>(

<div
key={index}
style={{
overflow:"hidden",
borderRadius:"20px",
height:"260px",
boxShadow:"0 10px 25px rgba(0,0,0,.15)"
}}
>

<img
src={img}
alt=""
style={{
width:"100%",
height:"100%",
objectFit:"cover",
transition:"0.4s"
}}
/>

</div>

))}

</div>

</section>

);

}