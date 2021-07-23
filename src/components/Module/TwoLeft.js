import React from 'react';
import '../../style/ModuleGeneral.scss'
import '../../style/ModuleTwoLeft.scss'
import ModuleLeftContent from '../content/ModuleTwoLeft';
import Componentaudio from '../audio/audio';
class ModuleLeft extends React.Component {
    state = {
        title: 'DIMENSIONES ESTRUCTURALES', 
        TextOne: 'Pausa que realiza el entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',
        TextTwo: 'Pausa que realiza el entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',

    }
    render(){               
        return(
            <div className="ModuleTwoLeft">

                <ModuleLeftContent ModuleLeft={this.state}/>
                <Componentaudio
                    urls={[
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',

                      ]}
                />
            </div>

        )
    }
}

export default ModuleLeft;