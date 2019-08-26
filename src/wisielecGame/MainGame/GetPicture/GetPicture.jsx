import React, { PureComponent } from 'react';

import s0 from '../../../images/s0.jpg';
import s1 from '../../../images/s1.jpg';
import s2 from '../../../images/s2.jpg';
import s3 from '../../../images/s3.jpg';
import s4 from '../../../images/s4.jpg';
import s5 from '../../../images/s5.jpg';
import s6 from '../../../images/s6.jpg';
import s7 from '../../../images/s7.jpg';
import s8 from '../../../images/s8.jpg';
import s9 from '../../../images/s9.jpg';



class GetPicture extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      tabPicture:[null,s0,s1,s2,s3,s4,s5,s6,s7,s8,s9],
      folder:'../../../images/s7.jpg',
      name:'wPicture'
    };
  }

render () {
    const {
    clickBadCount,
    gameOver,
    maxPicturesCount
  } = this.props;

  let nrImage = clickBadCount;
  let img = this.state.tabPicture[nrImage];

return (
  <div className="Panel___up__left_imgWisielec">
    {gameOver? <img id="Gra_image" src={this.state.tabPicture[maxPicturesCount]} alt=""/>:
    <img id="Gra_image" src={img} alt=""/>
    }
   </div>
    );
  }
}


export default GetPicture;
