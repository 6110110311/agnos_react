import React from 'react';
import './App.css';
import body from './img/default.png';

function App() {

  const [all_blank, all_set ] = React.useState(false)
  const [umbilicus_blank, umbilicus_set ] = React.useState(false)
  const [epigastrium_blank, epigastrium_set ] = React.useState(false)
  const [ruq_blank, ruq_set ] = React.useState(false)
  const [luq_blank, luq_set ] = React.useState(false)
  const [suprapubic_blank, suprapubic_set ] = React.useState(false)
  const [rlq_blank, rlq_set ] = React.useState(false)
  const [llq_blank, llq_set ] = React.useState(false)

  return (
    <header className="App-header">
      <div style={{backgroundImage: 'url('+body+')', height: "976px", backgroundRepeat: 'no-repeat'}}>
        <div>
          <img onClick={() => all_set(prevMode => !prevMode)} src={all_blank ? require('./img/all.png').default : require('./img/all-blank.png').default} style={{position:'absolute', marginLeft:'266.5px', marginTop:'339px'}} />
          <div>
            <img onClick={() => umbilicus_set(prevMode => !prevMode)} src={umbilicus_blank ? require('./img/umbilicus.png').default : require('./img/umbilicus-blank.png').default} style={{position:'absolute', marginLeft:'42px', marginTop:'333px'}} />
            <div>
              <img onClick={() => epigastrium_set(prevMode => !prevMode)} src={epigastrium_blank ? require('./img/epigastrium.png').default : require('./img/epigastrium-blank.png').default} style={{position:'absolute', marginLeft:'120px', marginTop:'213px'}} />
              <div>
                <img onClick={() => ruq_set(prevMode => !prevMode)} src={ruq_blank ? require('./img/ruq.png').default : require('./img/ruq-blank.png').default} style={{position:'absolute', marginLeft:'40px', marginTop:'334px'}} />
                <div>
                  <img onClick={() => luq_set(prevMode => !prevMode)} src={luq_blank ? require('./img/luq.png').default : require('./img/luq-blank.png').default} style={{position:'absolute', marginLeft:'423px', marginTop:'339px'}} />
                  <div>
                    <img onClick={() => suprapubic_set(prevMode => !prevMode)} src={suprapubic_blank ? require('./img/suprapubic.png').default : require('./img/suprapubic-blank.png').default} style={{position:'absolute', marginLeft:'123px', marginTop:'569px'}} />
                    <div>
                      <img onClick={() => rlq_set(prevMode => !prevMode)} src={rlq_blank ? require('./img/rlq.png').default : require('./img/rlq-blank.png').default} style={{position:'absolute', marginLeft:'29px', marginTop:'525px'}} />
                      <div>
                        <img onClick={() => llq_set(prevMode => !prevMode)} src={llq_blank ? require('./img/llq.png').default : require('./img/llq-blank.png').default} style={{position:'absolute', marginLeft:'426px', marginTop:'525px'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </header>
  );
}

export default App;
