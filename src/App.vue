<script setup>

</script>

<template>
  <header>
    <div class="header-menu">
      <div class="header-menu-block menu-mode-btn">
        <button @click="ChangeMode"> 
          <span class="blur-box">{{ textMode }}</span> 
          <span class="blur-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_162_312)">
            <path d="M14 12H10V0H14V12ZM18.213 1.754L17 3.353C19.984 5.085 22 8.308 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 8.308 4.016 5.085 7 3.353L5.787 1.754C2.322 3.857 0 7.651 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 7.651 21.678 3.857 18.213 1.754Z" fill="#00F0FF"/>
            </g>
            <defs>
            <clipPath id="clip0_162_312">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </span>
        </button>
      </div>
      <div class="header-menu-block menu-list">
        <ul>
          <li><a class="nav-link">Work</a></li>
          <li><a class="nav-link">About</a></li>
          <li><a class="nav-link">Community</a></li>
          <li><a class="nav-link">Contact</a></li>
        </ul>
      </div>
      <div class="header-menu-block menu-contacts">
        <div class="contacts-block">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_153_266)">
              <path d="M12 0.02C5.373 0.02 0 5.393 0 12.02C0 18.647 5.373 24.02 12 24.02C18.627 24.02 24 18.647 24 12.02C24 5.393 18.627 0.02 12 0.02ZM18.99 7L12 12.666L5.009 7H18.99ZM19 17H5V8.495L12 14.168L19 8.496V17Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_153_266">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </span>
          <span><a>oleksiikasiakov@gmail.com</a></span>
        </div>
        <div  class="contacts-block">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_153_264)">
              <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM15.445 17.827C11.761 19.511 6.044 8.397 9.645 6.519L10.698 6L12.444 9.409L11.402 9.922C10.307 10.509 12.587 14.962 13.707 14.419L14.739 13.914L16.499 17.311L15.445 17.827Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_153_264">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </span>
          <span><a rel="tel">+1 (587) 968 4093</a></span>
        </div>
      </div>
      <div class="header-menu-block menu-sign-up">
        <div><a class="sign-up-btn">Login</a></div>
        <div><a class="sign-up-btn">Register</a></div>
      </div>   
    </div>
  </header>

  <main>
    <div class="frame_1">
      <div class="row">
        <div class="container">
          <div class="left-side">
            <div class="large-text-block">
              <span class="hello-text">Hello!</span><br>
              <span class="hello-text">I’m Oleksii,</span><br>
              <span class="hello-text">web developer</span>
            </div>
            <div class="board-text">
              <ul>
                <li>Frontend developer</li>
                <li>Backend developer</li>
                <li>eCommerce developer</li>
                <li>Search optimization</li>
                <li>Web designer</li>
              </ul>

            </div>
            <div class="contact-me-block">
              <button class="contact-me-button">Contact me</button>
            </div>
          </div>
          <div class="right-side">
            <div class="slider-with-light">
              <div class="triangle-light">
                <!-- <div class="left-light"></div> -->
                <div id="triangle"></div>
                <!-- <div class="right-light"></div> -->
              </div>
              <div class="slider-tech">
                <div>
                  <VueSlickCarousel v-bind="settings">
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>5</h3></div>
                    
                  </VueSlickCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
      textMode : 'nightMode',
      settings: {
        "centerMode": true,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 3,
        "speed": 500
      }
    }
  },
  methods:{
    ChangeMode() {
      this.textMode = this.textMode == 'dayMode' ? 'nightMode' : 'dayMode'; 
      document.body.className = this.textMode;
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&family=Ribeye+Marrow&display=swap');
/*
font-family: 'Neonderthaw', cursive;
font-family: 'Ribeye Marrow', cursive;
*/
header {
  line-height: 1.5;
}
.menu-mode-btn button{
  font-family:'Ribeye Marrow', cursive;
  font-size:24px;
  border:0;
  background: transparent;
  color: #00F0FF;
  line-height:32px;
  width:180px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
