import React, { Fragment, memo } from 'react';
import styled from '../src/Style/Login.module.css';

let SearchHome = memo(function SearchHome(props) {
  let deve = [styled.Hello];
  let style = [
    {
      id: 1,
      photo:
        'https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-760w.jpg',
    },
    {
      id: 2,
      photo: 'https://m.media-amazon.com/images/I/81NBmV5H0nL._SS500_.jpg',
      name: 'julien doré',
    },
    {
      id: 3,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 4,
      photo:
        'https://img.nrj.fr/NPOoEXZLLm-dZ7t9D8MF1KBh0X0=/315x177/smart/https%3A%2F%2Fimage-api.nrj.fr%2Fmedias%2F2020%2F09%2Flady-gaga-1_5f6af9b1605ef.jpg',
      name: 'lady gaga',
    },
    {
      id: 5,
      photo:
        'https://img.nrj.fr/m0-1Qzl5QqOZUk0ZRBBctQNvQk0=/http://media.nrj.fr/1900x1200/2016/09/kendji-jpg-1003128.jpg',
      name: 'kendji girac',
    },
    {
      id: 6,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 7,
      photo:
        'https://culture.tv5monde.com/sites/tv5-culture.fr/files/styles/portrait_624x452_/public/2018-08/field_image-1667-1981_vignette_Tal.png.jpg?itok=dBX6jXo7',
    },

    {
      id: 8,
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcQxSXfSnGlkFj2gIdluzCVo0mz_4fiwsa1A&usqp=CAU',
      name: 'eminem',
    },
    {
      id: 9,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 10,
      photo:
        'https://img.lemde.fr/2019/04/05/0/0/960/960/688/0/60/0/18299d3_tUvp2AZPH_jnsIL2ypVFGUro.jpg',
      name: 'pnl',
    },
    {
      id: 11,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 12,
      photo: 'https://intrld.com/wp-content/uploads/2020/09/ojoz-damso.png',
      name: 'damso',
    },
    {
      id: 13,
      photo:
        'https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-760w.jpg',
    },
    {
      id: 14,
      photo:
        'https://img.20mn.fr/bXMJfQuuTgGylI1xkVg6NA/830x532_daft-punk-a-los-angeles-avril-2013.jpg',
      name: 'daft punk',
    },
    {
      id: 15,
      photo:
        'https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-760w.jpg',
    },
    {
      id: 16,
      photo:
        'https://www.iphonote.com/wp-content/uploads/2018/03/rihanna-2-milliards-flux-apple-music-600x448.jpg',
      name: 'rihanna',
    },
    {
      id: 17,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 18,
      photo: 'https://p4.storage.canalblog.com/45/23/636073/126373304_o.jpg',
      name: 'jackson',
    },
    {
      id: 19,
      photo:
        'https://e-cdns-images.dzcdn.net/images/artist/f2631af18b281faf5e8fdac9e876df21/264x264.jpg',
      name: 'slimane',
    },
    {
      id: 20,
      photo:
        'https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2Enews.2F2018.2F01.2F12.2F5845ddcc-c7d9-4574-8063-437af198e431.2Ejpeg/1200x600/crop-from/top/quality/80/beyonce-sacree-aux-mtv-europe-music-awards-videos.jpg',
      name: 'beyoncé',
    },
    {
      id: 21,
      photo:
        'https://cdns-images.dzcdn.net/images/artist/c188b3b652009ca1f644656fce77be43/500x500.jpg',
      name: 'soprano',
    },
    {
      id: 22,
      photo:
        'https://img.nrj.fr/WtVhjHv1tDUTn3xpIj0l-3cVwfA=/https://image-api.nrj.fr/medias/2018/09/aya-nakamura-cover-djadja-nue_5bac966a250ec.jpg',
      name: 'aya nakamura',
    },
    {
      id: 23,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 24,
      photo: 'https://www.nextplz.fr/wp-content/uploads/2020/06/jul.jpg',
      name: 'jul',
    },
    {
      id: 25,
      photo:
        'https://static.cnews.fr/sites/default/files/screenshot_2020-06-10_wejdene_wejdene_bk_photos_et_videos_instagram_5ee09cd84b191_0.jpg',
      name: 'wejdene',
    },
    {
      id: 26,
      photo:
        'https://blog.patrickstereocap.com/wp-content/uploads/2020/06/Gambi-La-vie-est-belle-Artwork-album.jpg',
      name: 'gambi',
    },
    {
      id: 27,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 28,
      photo: 'https://m.media-amazon.com/images/I/71qrM-aOBbL._SS500_.jpg',
      name: 'lady gaga',
    },
    {
      id: 29,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 30,
      photo:
        'https://culture.tv5monde.com/sites/tv5-culture.fr/files/styles/portrait_624x452_/public/2018-08/field_image-1667-1981_vignette_Tal.png.jpg?itok=dBX6jXo7',
      name: 'tal',
    },
    {
      id: 31,
      photo:
        'https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-760w.jpg',
    },
    {
      id: 32,
      photo:
        'https://img.ohmymag.com/article/1280/people/justin-bieber_bc53d89b642d93a5c7be4f4ba2acd31ad1a12d3f.jpg',
      name: 'justin bieber',
    },
    {
      id: 33,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 34,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/7/7d/Justice_%28band%29.jpg',
      name: 'justice',
    },
    {
      id: 35,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 35,
      photo:
        'https://images.bfmtv.com/QKUXflpHx9trPP1IesZSghCFiNE=/6x25:1174x682/1168x0/images/Beyonce-a-Coachella-160071.jpg',
      name: 'beyoncé',
    },
    {
      id: 21,
      photo:
        'https://cdns-images.dzcdn.net/images/artist/c188b3b652009ca1f644656fce77be43/500x500.jpg',
      name: 'soprano',
    },
    {
      id: 22,
      photo:
        'https://img.20mn.fr/7okQNhHFSdmkRc1DP5iY6g/830x532_chanteuse-aya-nakamura.jpg',
      name: 'aya nakamura',
    },
    {
      id: 23,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 24,
      photo: 'https://www.nextplz.fr/wp-content/uploads/2020/06/jul.jpg',
      name: 'jul',
    },
    {
      id: 25,
      photo:
        'https://images.sudouest.fr/2020/08/25/5f44ea1466a4bdbe60d490d4/golden/la-chanteuse-wejdene.jpg',
      name: 'wejdene',
    },
    {
      id: 26,
      photo:
        'https://blog.patrickstereocap.com/wp-content/uploads/2020/06/Gambi-La-vie-est-belle-Artwork-album.jpg',
      name: 'gambi',
    },
    {
      id: 27,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 28,
      photo: 'https://m.media-amazon.com/images/I/71qrM-aOBbL._SS500_.jpg',
      name: 'lady gaga',
    },
    {
      id: 29,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 30,
      photo:
        'https://www.non-stop-people.com/sites/non-stop-people.com/files/styles/article/public/styles/paysage/public/images/2018/06/maxpeopleworldtwo033172.jpg?itok=5s9CDw_s',
      name: 'tal',
    },
    {
      id: 31,
      photo:
        'https://culture.tv5monde.com/sites/tv5-culture.fr/files/styles/portrait_624x452_/public/2018-08/field_image-1667-1981_vignette_Tal.png.jpg?itok=dBX6jXo7',
    },
    {
      id: 32,
      photo:
        'https://img.ohmymag.com/article/1280/people/justin-bieber_bc53d89b642d93a5c7be4f4ba2acd31ad1a12d3f.jpg',
      name: 'justin bieber',
    },
    {
      id: 33,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 34,
      photo: 'https://i.ytimg.com/vi/sy1dYFGkPUE/maxresdefault.jpg',
      name: 'justice',
    },
    {
      id: 35,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 35,
      photo:
        'https://media.gq.com/photos/5582d7773655c24c6c94b5f1/master/w_1600%2Cc_limit/music-2015-02-nas-nas-gq-magazine-february-2015.jpg',
      name: 'nas',
    },
    {
      id: 21,
      photo:
        'https://cdns-images.dzcdn.net/images/artist/c188b3b652009ca1f644656fce77be43/500x500.jpg',
      name: 'soprano',
    },
    {
      id: 22,
      photo:
        'https://img.20mn.fr/7okQNhHFSdmkRc1DP5iY6g/830x532_chanteuse-aya-nakamura.jpg',
      name: 'aya nakamura',
    },
    {
      id: 23,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 24,
      photo: 'https://www.nextplz.fr/wp-content/uploads/2020/06/jul.jpg',
      name: 'jul',
    },
    {
      id: 25,
      photo:
        'https://img.nrj.fr/w_du1sNdB432Fl6GEc38AHePc1k=/800x450/smart/http%3A%2F%2Fimage-api.nrj.fr%2Fmedias%2F2017%2F10%2Fgettyimages-635154334_59e4819b40c34.jpg',
      name: 'beyoncé',
    },
    {
      id: 26,
      photo:
        'https://blog.patrickstereocap.com/wp-content/uploads/2020/06/Gambi-La-vie-est-belle-Artwork-album.jpg',
      name: 'gambi',
    },
    {
      id: 27,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 28,
      photo: 'https://m.media-amazon.com/images/I/71qrM-aOBbL._SS500_.jpg',
      name: 'lady gaga',
    },
    {
      id: 29,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 30,
      photo:
        'https://culture.tv5monde.com/sites/tv5-culture.fr/files/styles/portrait_624x452_/public/2018-08/field_image-1667-1981_vignette_Tal.png.jpg?itok=dBX6jXo7',
      name: 'tal',
    },
    {
      id: 31,
      photo:
        'https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-760w.jpg',
    },
    {
      id: 32,
      photo:
        'https://img.ohmymag.com/article/1280/people/justin-bieber_bc53d89b642d93a5c7be4f4ba2acd31ad1a12d3f.jpg',
      name: 'justin bieber',
    },
    {
      id: 33,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 34,
      photo: 'https://i.ytimg.com/vi/sy1dYFGkPUE/maxresdefault.jpg',
      name: 'justice',
    },
    {
      id: 35,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 35,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 21,
      photo:
        'https://cdns-images.dzcdn.net/images/artist/c188b3b652009ca1f644656fce77be43/500x500.jpg',
      name: 'soprano',
    },
    {
      id: 22,
      photo:
        'https://img.20mn.fr/7okQNhHFSdmkRc1DP5iY6g/830x532_chanteuse-aya-nakamura.jpg',
      name: 'aya nakamura',
    },
    {
      id: 23,
      photo:
        'https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1200&h=628&crop=1',
    },
    {
      id: 24,
      photo: 'https://www.nextplz.fr/wp-content/uploads/2020/06/jul.jpg',
      name: 'jul',
    },
    {
      id: 25,
      photo:
        'https://static.cnews.fr/sites/default/files/screenshot_2020-06-10_wejdene_wejdene_bk_photos_et_videos_instagram_5ee09cd84b191_0.jpg',
      name: 'wejdene',
    },
    {
      id: 26,
      photo:
        'https://blog.patrickstereocap.com/wp-content/uploads/2020/06/Gambi-La-vie-est-belle-Artwork-album.jpg',
      name: 'gambi',
    },
    {
      id: 27,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 28,
      photo: 'https://m.media-amazon.com/images/I/71qrM-aOBbL._SS500_.jpg',
      name: 'lady gaga',
    },
    {
      id: 29,
      photo:
        'https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-003.jpg',
    },
    {
      id: 30,
      photo:
        'https://culture.tv5monde.com/sites/tv5-culture.fr/files/styles/portrait_624x452_/public/2018-08/field_image-1667-1981_vignette_Tal.png.jpg?itok=dBX6jXo7',
      name: 'tal',
    },
  ];

  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          justifyContent: 'center',
          display: 'flex',
          position: 'fixed',
          zIndex: '400',
        }}
      >
        <div
          style={{
            display: 'flex',
            zIndex: '400',
            position: 'fixed',
            marginTop: '50px',
          }}
        >
          <img
            alt='fleche'
            className={styled.fleche}
            src='https://www.marcusindustrie.fr/wp-content/uploads/2018/12/peinture-fleche-2-png'
            width='100%'
            height='auto'
          />
        </div>
      </div>
      <div className={styled.SearchPost}>
        {style.map((items, index) => {
          return (
            <div
              onClick={items.name ? () => props.changeHandle(items.name) : null}
              key={index}
              className={deve.join(' ')}
            >
              <img src={items.photo} alt='photoName' />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
});

export default SearchHome;
