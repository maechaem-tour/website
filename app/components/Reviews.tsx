export default function Reviews() {

const reviews = [

{
name:"David",
country:"🇮🇱 Israel",
text:"Amazing service! Professional driver and unforgettable trip.",
stars:"★★★★★"
},

{
name:"Sarah",
country:"🇺🇸 USA",
text:"Best private tour in Thailand. Highly recommended.",
stars:"★★★★★"
},

{
name:"Michael",
country:"🇦🇺 Australia",
text:"Luxury van, friendly guide and perfect organization.",
stars:"★★★★★"
}

];

return(

<section
style={{
padding:"100px 8%",
background:"#f7f7f7"
}}
>

<h2
style={{
fontSize:"42px",
textAlign:"center",
marginBottom:"20px"
}}
>
Customer Reviews
</h2>

<p
style={{
textAlign:"center",
color:"#666",
marginBottom:"60px"
}}
>
More than 1,000 happy travelers
</p>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
gap:"30px"
}}
>

{reviews.map((item)=>(
<div
key={item.name}
style={{
background:"white",
padding:"35px",
borderRadius:"20px",
boxShadow:"0 15px 40px rgba(0,0,0,.08)"
}}
>

<div
style={{
fontSize:"22px",
color:"#FFD700",
marginBottom:"15px"
}}
>
{item.stars}
</div>

<p
style={{
color:"#555",
lineHeight:"1.8"
}}
>
"{item.text}"
</p>

<h3
style={{
marginTop:"25px"
}}
>
{item.name}
</h3>

<span
style={{
color:"#888"
}}
>
{item.country}
</span>

</div>
))}

</div>

</section>

)

}