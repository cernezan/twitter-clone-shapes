import './App.css';
import styled from 'styled-components';
import logo from "./twitter.png";
import profile from "./myprofile.jpg";

//
// THOSE ARE THE TWEETS YOU NEED TO RENDER ON SCREEN, IMAGINE THOSE BEING SENT BACK FROM THE SERVER
// 
const TWEETS = [
  {
    id: 1,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 2,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 3,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 4,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 5,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 6,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 7,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 8,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 9,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
]




function App() {
  return (

    
    <Wrapper>
    
      <div class="container">
      <div class="row">
      <div class="col-sm">
        <img class="img logo-pos" src={logo} alt="Twitter logo"></img>

      </div>

      <div class="col-6">

        <h5 class="home-text">Home</h5>

      </div>
      <div class="col-sm">

        <input type="search" class="form-control search" id="searchtwitter" placeholder="Search Twitter"/>

      </div>

      </div>
      </div>
    
      <div class="container padding-top">
        <div class="row">
          <div class="col-sm" id="sticky-sidebar">
          <div class="sticky-top">
          <ul class="nav flex-column">
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-primary no-border btn-lg rounded-pill"><i class="bi bi-house-door"></i> Home</button>
            </li>
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-pill"><i class="bi bi-hash"></i> Explore</button>
            </li>
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-pill"><i class="bi bi-bell"></i> Notifications</button>
            </li>
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-pill"><i class="bi bi-envelope"></i> Messages</button>
            </li>
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-pill"><i class="bi bi-bookmark"></i> Bookmarks</button>
            </li>
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-pill"><i class="bi bi-card-list"></i> Lists</button>
            </li>
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-pill"><i class="bi bi-person"></i> Profile</button>
            </li>
            <li class="nav-item margin">
              <button type="button" class="btn btn-outline-dark btn-lg rounded-pill"><i class="bi bi-three-dots"></i> More</button>
            </li>
            <li class="nav-item margin">
              <br/>
              <button type="button" class="btn btn-primary btn-lg rounded-pill tweet-bt">Tweet</button>
            </li>
          </ul>
          </div>
          </div>

        <div class="col-6">

          <div class="media media-fix border rounded">
            <img class="img-size tw-profile" src={profile}/>
              <input type="text" class="tweet-txt" id="tweet"  placeholder="What's happening?"></input>
              <br></br>
              <i class="bi bi-image icon-size reply tweet-icons tweet-icons-first"></i>
              <i class="bi bi-bar-chart icon-size reply tweet-icons"></i>
              <i class="bi bi-emoji-smile icon-size reply tweet-icons"></i>
              <i class="bi bi-calendar-date icon-size reply tweet-icons tweet-button-pos"></i>
              <button type="button" class="btn btn-primary rounded-pill">Tweet</button>
            
          </div>

            {TWEETS.map((tw, index)=> (

          
          <div class="media border rounded">
          <img class="img-size tw-profile" src={Object.values(tw.user)[0]}/>
            <h6 class="tw-acc">{Object.values(tw.user)[1]} <small class="username">@{Object.values(tw.user)[2]}</small></h6>
          
            <p>{tw.tweet}</p>
            <i class="bi bi-chat tw-icons reply icon-size"></i>
            <i class="bi bi-arrow-repeat tw-icons-rest retweet icon-size"></i>
            <i class="bi bi-star tw-icons-rest favorite icon-size"></i>
            <i class="bi bi-upload tw-icons-rest reply icon-size"></i>
          </div> 


        ))}


        </div>


        <div class="col-sm" id="sticky-sidebar">

        <div class="sticky-top">
          <div class="container padding-top">

        <div class="row p-3 mb-2 bg-light text-dark rounded border">
          <ul class="nav flex-column">
            <li class="nav-item margin border-bottom margin">
              <h4 class="">Trends For You</h4>
            </li>
            <li class="nav-item margin padding-top trends">
              <h6>#Bitcoin</h6>
            </li>
            <li class="nav-item margin trends">
              <h6>#Crypto</h6>
            </li>
            <li class="nav-item margin padding-bottom border-bottom trends">
              <h6>#Europe</h6>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-link">Show more</button>
            </li>
          </ul>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      


    </Wrapper>
  );
}



export default App;

// styled components that we use in majority of our projects
// check them out, they're pretty cool
const Wrapper = styled.div`
  margin: 0 auto;
`

