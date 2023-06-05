

class MediaPlayTarget{

    action(audioType , fileName){
        throw new Error('METHOD PLAY MUST BE IMPLEMENTED');
    }
}


class MP3PlayerAdaptee{

    actionDevice(fileName){
        console.log('PLAYING FILE' , fileName);
    }
}


class MediaAdapter  extends MediaPlayTarget{

    constructor(){
        super();
        this.adaptee = new MP3PlayerAdaptee();
    }


    action(audioType , fileName){
        if(audioType === 'MP3'){
            this.adaptee.actionDevice(fileName);
        }else{
            console.log('INVALID DEVICE TYPE' , audioType);
        }
    }
}


class AudioPlayerAdapter extends MediaPlayTarget{

    action(audioTYpe , filename){
        if(audioTYpe === 'MP3'){
            console.log('PLAYING MP3 FILE' , filename);
        }else if(audioTYpe === 'MP4' || audioTYpe === 'VLC'){
            const mediaAdapter = new MediaPlayTarget();
            mediaAdapter.action(audioTYpe , filename);
        }else{
            console.log('INVALID MEDIA TYPE', audioTYpe);
        }
    }
}


const audioPlayer = new AudioPlayerAdapter();
audioPlayer.action('MP3' , 'welcome_to_the_jungle.mp3');
audioPlayer.action('MP4', 'come_to_america.mp4')
