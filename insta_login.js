
const container = document.querySelector('#container');
const LOrSBtn = document.querySelector('#loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = ` Don't have an account?SignUp` : LOrSBtn.innerHTML = `Have an account? Login`
    //true -> then-->else

    loginBoolean ? container.innerHTML += `<div id="login">
<div id='box2'>
<br></br>
<img id='insta1_1' src='https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1' alt=''>
<input id='input1_1' type="email" placeholder="Phone no ,username or email Id">
<br></br>

<input id='input2_1' type="password" placeholder="password">
<br></br>

<button id="BTN2"><span style='color:white'>Login</span></button>
<div id='or1_1'><hr></hr></div>
<div id='or2_1'>OR</div>
<div id='or3_1'><hr></hr></div>
<br></br>

<div id='logo1_1'><img id='facebook1_1' src='https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png ' alt=''> <span style='color:sky'><b>Log in with Facebook</b> </span> </div>
<h5> <span style='color:grey'> Forgotten your Password? </span></h5>

</div>

</div>`: container.innerHTML += ` <div id="signup">

<img id='insta1' src='https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1' alt=''>
<h3 id='hor1'> signup to see photos and videos from your friends</h3>

<div id='logo1'><img id='facebook1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwbNdM5RIMsQgPU5tNKQlEOkDOdQr3eLRRQ&usqp=CAU ' alt=''> <span style='color:white'>Log in with Facebook </span> </div>
<div id='or1'><hr></hr></div>
<div id='or2'>OR</div>
<div id='or3'><hr></hr></div>
<br></br>
<input id='input1' type="text" placeholder="Mobile number or email address">
<br></br>
<input id='input2' type="text" placeholder="Full name">
<br></br>
<input id='input3' type="email" placeholder="Username">
<br></br>
<input  id='input4' type="password" placeholder="Password">

<h5><span style='color:grey'>People who use our service may have uploaded your contact information to Instagram. Learn more</span></h5>
<h5><span style='color:grey'> By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</span></h5>
<button id="BTN1"><span style='color:white'>Signup</span></button>
<div id='down1'></div>
</div>`
}
displayFunction()
LOrSBtn.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    container.innerHTML=''
    displayFunction()
})
