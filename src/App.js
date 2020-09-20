import React from 'react';
import { Container, Image,Divider,Header, Grid,Label,Icon,Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div>


    <Container >
     <Grid columns={1} centered>
       <Grid.Row>
         <Grid.Column>
         <Image src="myAvatar.png" centered size='small' circular  bordered />
         </Grid.Column>
       </Grid.Row>

       <Grid.Row >
         <Grid.Column >
         <h1 style={{textAlign:"center"}}>Nkosana Khoza</h1>
         <Container textAlign='center' >
            Computer Science & Informatics Graduate
         </Container>
         </Grid.Column>
       </Grid.Row>

       <Divider />

       <Grid.Row>
         <Grid.Column >
          <Container textAlign='center'>
          <a href="mailto:nkosanakhoza2@gmail.com?subject=Job%20Offer%20Portfolio">
          <Label horizontal textAlign='center'>
            <Icon  name='mail' /> nkosanakhoza2@gmail.com
          </Label>
          </a>
          
          
          <a href="https://www.linkedin.com/in/nkosana-khoza-063119143/">
          <Label horizontal textAlign='center'>
            <Icon  name='linkedin' /> nkosanakhoza2@gmail.com
          </Label>
          </a>

          <a href="https://www.instagram.com/11sco_r_pio11/">
          <Label horizontal textAlign='center'>
            <Icon  name='instagram' /> @11sco_r_pio11
          </Label>
          </a>

          <a href="https://wa.me/27676647514">
          <Label>
            <Icon name='whatsapp' /> +27 67 664 7514
          </Label>
          </a>

    
          
          
          </Container>
         </Grid.Column>
       </Grid.Row>

     </Grid>
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
      <h1>Profile</h1>

      <Divider hidden />

      <p>
      
      I Am A Passionate Graduate in The Field Of Computer Science Informatics. 
      I Am A Huge loT Enthusiast And Hobbyist Driven By The Unshakable Urge To Design And Build Quality Software For Clients, 
      While Satisfying And Completely Meeting Business Requirements. 
      
      I Am A Hardworking Individual And Always Have A Beginner's Mind. I Am Always Willing To Learn, Teach , Unlearn What I Already Think I Know<br/>
      And Relearn Anything In A Different Technique. I Believe There's A Technique To Getting Things Right And Most Times Getting Them Right The First Time.
      I'm Not A Copy Of All The Textbooks I've Read And Gone Through To Get My Qualification, Yet I Am A Compound Of The Most Critical Concepts From The Textbooks,
      Knowledge From People Who Are The Industry That Are Close To Me, The Knowledge I Gather Daily In My Interest, And The Skill To Use The Aformentioned In Synergy
      And Conjunction Such That Concepts May Be Related And Applied To Practical Examples And Situations, And Facts May Be Used To Support Certain Arguments And/Or Design
      Decisions. I Am A Very Focused, Driven And Practical Individual, I Understand The Basic Theory And Use That As A Basis Of Coming Up With A Creative, Innovative Solution.
      
      </p>
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
    <h1 style={{textAlign:"center"}}>Education</h1>

      <p><b>Grade 12 - Matric,Finetown Secondary School, Lenasia South </b></p>
      <p>Jan 2012 - December 2016</p>
      <b>Obtained Distinctions In : </b>
      <ul>
        <li>Physical Sciences</li>
        <li>Life Sciences</li>
        <li>Geography</li>
      </ul>

      <p><b>Bsc in Information Technology in Computer Science & Informatics, University Of Johannesburg, Johannesburg </b></p>
      <p>February 2017 - November 2020</p>
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
    <h1 style={{textAlign:"center"}}>Skills</h1>

   
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column>
        <Progress percent={95} size='small' color='black' label='Java'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={85} size='small' color='black' label='Python'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={75} size='small' color='black' label='Assembly'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={80} size='small' color='black' label='MVC API'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={85} size='small'  color='black'label='C++'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={90} size='small' color='black' label='C#'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={74} size='small' color='black' label='React Native'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={55} size='small' color='black' label='React'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={80} size='small' color='black' label='ASP.NET MVC'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={85} size='small' color='black' label='Xamarin.Android'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={80} size='small' color='black' label='SQL Database'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={80} size='small' color='black' label='IoT'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={75} size='small' color='black' label='Electronics'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={55} size='small' color='black' label='Microsoft Azure'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={40} size='small' color='black'  label='Unity Game Development'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={60} size='small' color='black' label='Basic Penetration Testing'  />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
    <h1 style={{textAlign:"center"}}>Awards</h1>
      <ul>
        <li>
          <div>
          <p><b>UJenius Academic Excellence Award, University Of Johannesburg, Johannesburg </b></p>
          <p>May 2018</p>
          </div>
        </li>
      </ul>
    </Container>

    <Container textAlign='left' >
    <h1 style={{textAlign:"center"}}>Hobbies</h1>
      
     
      
      
      
      <ul>
        <li>
        <p>Drawing, Disassembly Of Old Electronics For Spare Parts In My Projects :), I Flash And Test Custom Roms, Gaming,COD Player, PUBG Player :)</p>
        </li>

        <li>
            <p> Call Of Duty Sniper</p>
          </li>

          <li>
          <p>Fortnite Noob</p>
          </li>

          <li>
          <p>I Do A Lot Of Meditation</p>
          </li>
      </ul>
      <p>Away From My Screen Im An Actual Human Being With Family And Friends :)
      <br />As Within, So Without. <br />Therefore I Try The Best I Can To Treat People How I Would Like To Be Treated. </p>
    </Container>

    <Divider hidden />

    <Container textAlign='left'>
    <h1 style={{textAlign:"center"}}>Languages</h1>
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column>
        <Progress percent={98} size='small' color='black' label='English'  />
        </Grid.Column>

        <Grid.Column> 
        <Progress percent={99} size='small'  color='black'label='IsiZulu'  />
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Container>


    </div>
  );
}

export default App;
