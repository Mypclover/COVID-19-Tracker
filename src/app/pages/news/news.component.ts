import {Component, OnInit} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any;
  R = [];

  cards = [
    {
      'status': 'ok',
      'totalResults': 432813,
      'articles': [
        {
          'source': {
            'id': null,
            'name': 'Businesswire.com'
          },
          'author': null,
          'title': 'New Frontier Health Corporation Announces Fourth Quarter and Fiscal 2019 Financial Results',
          'description': 'BEIJING--(BUSINESS WIRE)--New Frontier Health Corporation (“NFH” or “the Company”) (NYSE: NFH), operator of the premium healthcare services provider United Family Healthcare (“UFH"), today announced the unaudited financial results of Healthy Harmony Holdings,…',
          'url': 'https://www.businesswire.com/news/home/20200326005230/en/New-Frontier-Health-Corporation-Announces-Fourth-Quarter',
          'urlToImage': 'http://www.businesswire.com/images/bwlogo_square.png',
          'publishedAt': '2020-03-26T09:54:14Z',
          'content': 'BEIJING--(BUSINESS WIRE)--New Frontier Health Corporation (NFH or the Company) (NYSE: NFH), operator of the premium healthcare services provider United Family Healthcare (UFH"), today announced the unaudited financial results of Healthy Harmony Holdings, L.P.… [+60733 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Businesswire.com'
          },
          'author': null,
          'title': 'ABB Shareholders Approve All Proposals At Annual General Meeting',
          'description': 'ZURICH--(BUSINESS WIRE)--The shareholders of ABB have approved all the proposals by the company’s Board of Directors at its 2020 Annual General Meeting held in Dübendorf, Switzerland. The event took place under extraordinary conditions, and in line with the C…',
          'url': 'https://www.businesswire.com/news/home/20200326005251/en/ABB-Shareholders-Approve-Proposals-Annual-General-Meeting',
          'urlToImage': 'https://mms.businesswire.com/media/20200326005251/en/570302/23/ABB_logo.jpg',
          'publishedAt': '2020-03-26T09:54:14Z',
          'content': 'ZURICH--(BUSINESS WIRE)--The shareholders of ABB have approved all the proposals by the companys Board of Directors at its 2020 Annual General Meeting held in Dübendorf, Switzerland. The event took place under extraordinary conditions, and in line with the CO… [+2635 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Dailymail.co.uk'
          },
          'author': 'By Jessica Rach For Mailonline',
          'title': 'Princess Eugenie reveals her hospital has become a trauma centre for the first time',
          'description': 'Princess Eugenie has praised the The Royal National Orthopaedic Hospital as they  become a trauma centre for the first time since 1982 amid the coronavirus epidemic.',
          'url': 'https://www.dailymail.co.uk/femail/article-8154971/Princess-Eugenie-reveals-hospital-trauma-centre-time.html',
          'urlToImage': 'https://i.dailymail.co.uk/1s/2020/03/26/09/26431146-0-image-a-12_1585216236956.jpg',
          'publishedAt': '2020-03-26T09:54:06Z',
          'content': 'Princess Eugenie has praised the The Royal National Orthopaedic Hospital as they  become a trauma centre for the first time since 1982 amid the coronavirus epidemic.\r\nThe royal, 30, who is a patron of the centre, admitted she was \'so proud\' of the hospital fo… [+3239 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Adage.com'
          },
          'author': 'I-Hsien Sherwood',
          'title': 'Brand messaging in the age of coronavirus, and Harris Diamond on working from home (globally): Thursday Wake-Up Call',
          'description': 'Plus, Bernie Sanders burns McDonald\'s and Busch promotes pups.',
          'url': 'https://adage.com/article/news/brand-messaging-age-coronavirus-and-harris-diamond-working-home-globally-thursday-wake-call/2246501',
          'urlToImage': 'https://s3-prod.adage.com/s3fs-public/styles/800x600/public/20200326_WUC_3x2.jpg',
          'publishedAt': '2020-03-26T09:53:57Z',
          'content': 'Just brieflyCoronavirus hits breakfast where it lives: Beloved diner chain Waffle House is shutting down hundreds of locations to prevent the spread of COVID-19. The Federal Emergency Management Agency uses the status of a communitys Waffle House as an inform… [+1865 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Lemondeinformatique.fr'
          },
          'author': null,
          'title': 'Confinement et télétravail : Le pire des cyberattaques est à venir',
          'description': 'En ouvrant massivement les r�seaux d\'entreprise � leurs employ�s confin�s et contraints au t�l�travail, les entreprises permettent une continuit� a...',
          'url': 'https://www.lemondeinformatique.fr/actualites/lire-confinement-et-teletravail-le-pire-des-cyberattaques-est-a-venir-78566.html',
          'urlToImage': 'https://images.itnewsinfo.com/lmi/articles/grande/000000071483.jpg',
          'publishedAt': '2020-03-26T09:53:37Z',
          'content': 'En ouvrant massivement les rseaux d\'entreprise leurs employs confins et contraints au tltravail, les entreprises permettent une continuit a minima - voire sans couture - de leur activit. Mais les pirates informatiques sont au taquet pour analyser dans l\'ombre… [+6345 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Observador.pt'
          },
          'author': 'Paulo Farinha',
          'title': 'Já chegou. Um dos nossos está infetado',
          'description': 'As miúdas não se aperceberam. Fomos discretos, fizemos os telefonemas que tínhamos de fazer, os telemóveis no silêncio e não acrescentámos mais alarme ao estado em que têm vivido nos últimos dias.',
          'url': 'https://observador.pt/opiniao/ja-chegou-um-dos-nossos-esta-infetado/',
          'urlToImage': 'https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2F467x467%2Cq80%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2020%2F03%2F17084313%2Fobservador_pf_foto_467x467_acf_cropped.jpg',
          'publishedAt': '2020-03-26T09:53:19Z',
          'content': 'Bem, já é oficial. O primeiro exemplar de Covid 19 saiu aqui ao menino.\r\nFoi assim que recebemos a notícia ontem ao fim da tarde. A mensagem aterrou no grupo de WhatsApp. Um dos nossos já está infetado. Sabe-o desde anteontem, quando o resultado do teste veio… [+6752 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Slashdot.org'
          },
          'author': 'feedfeeder',
          'title': 'Coronavirus updates: U.S. death toll over 1,000 as hospitals struggle - CBS News',
          'description': 'Coronavirus updates: U.S. death toll over 1,000 as hospitals struggleCBS News Coronavirus live updates: Senate passes historic $2T emergency aid package; US deaths surpass 1,000USA TODAY Coronavirus: Deaths in United States linked to COVID-19 surpass 1,000NBC…',
          'url': 'https://slashdot.org/firehose.pl?op=view&amp;id=128021682',
          'urlToImage': null,
          'publishedAt': '2020-03-26T09:52:36Z',
          'content': 'The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.'
        },
        {
          'source': {
            'id': null,
            'name': 'Dailymail.co.uk'
          },
          'author': 'By Charlie Coë Alana Mazzoni For Daily Mail Australia',
          'title': 'Horrifying maps reveal Australian suburbs worst hit by the coronavirus',
          'description': 'Waverley in Sydney\'s eastern suburbs leads all areas in New South Wales with 105 cases of COVID-19, while Stonnington in Melbourne\'s inner-city was the highest in Victoria with 57 infections.',
          'url': 'https://www.dailymail.co.uk/news/article-8154569/Horrifying-maps-reveal-Australian-suburbs-worst-hit-coronavirus.html',
          'urlToImage': 'https://i.dailymail.co.uk/1s/2020/03/26/09/26428680-0-image-a-22_1585216011471.jpg',
          'publishedAt': '2020-03-26T09:52:33Z',
          'content': 'Australia\'s coronavirus hotspots have been laid bare in alarming maps showing which areas have been worst affected by the pandemic, as the national infection count climbs to 2,806. \r\nWaverley, which includes Bondi, Bronte and Queens Park in Sydney\'s eastern s… [+9284 chars]'
        },
        {
          'source': {
            'id': 'ansa',
            'name': 'ANSA.it'
          },
          'author': '',
          'title': 'Mastrotto, 100mila euro ospedale Vicenza',
          'description': 'Il Gruppo Mastrotto di Arzignano (Vicenza), prima azienda conciaria in Europa, ha scelto di\r\nsupportare la Fondazione San Bortolo di Vicenza, Onlus attiva nella raccolta fondi a favore\r\ndell\'ospedale berico, donando 100 mila euro utili per l\'acquisto di mate.…',
          'url': 'http://www.ansa.it/veneto/notizie/2020/03/26/mastrotto-100mila-euro-ospedale-vicenza_ce7970c1-8469-4ec1-9e6a-b143012cfa9d.html',
          'urlToImage': 'http://www.ansa.it/webimages/img_700/2020/3/26/0580c3d05ddf09f49ffefdcc804c9ba0.jpg',
          'publishedAt': '2020-03-26T09:52:31Z',
          'content': '(ANSA) - VICENZA, 26 MAR - Il Gruppo Mastrotto di Arzignano\r\n(Vicenza), prima azienda conciaria in Europa, ha scelto di\r\nsupportare la Fondazione San Bortolo di Vicenza, Onlus attiva\r\nnella raccolta fondi a favore dell\'ospedale berico, donando 100\r\nmila euro … [+641 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Dailymail.co.uk'
          },
          'author': 'By Lara Keay For Mailonline',
          'title': 'Video of construction workers at new Royal Hospital building site Liverpool not social distancing',
          'description': 'The UK\'s main house builders Bellway, Persimmon, Barratt and Taylor Wimpey have all decided to stop working, but Redrow and Cairn Construction are still open.',
          'url': 'https://www.dailymail.co.uk/news/article-8154835/Video-construction-workers-new-Royal-Hospital-building-site-Liverpool-not-social-distancing.html',
          'urlToImage': 'https://i.dailymail.co.uk/1s/2020/03/26/09/26430628-0-image-a-6_1585215374033.jpg',
          'publishedAt': '2020-03-26T09:52:31Z',
          'content': 'Boris Johnson faces mounting pressure to shut down building sites across Britain to help stem the spread of coronavirus. \r\nMr Johnson was bombarded with calls to put a halt to all non-essential construction projects during Prime Minister\'s Questions yesterday… [+8998 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Espn.com'
          },
          'author': 'ESPN',
          'title': 'McLaren team members return home from Australia quarantine',
          'description': 'The McLaren team member who tested positive for coronavirus ahead of the Australian Grand Prix has returned home to the UK along with colleagues who remained in Melbourne in isolation.',
          'url': 'https://www.espn.com/f1/story/_/id/28956282/mclaren-team-members-return-home-australia-quarantine',
          'urlToImage': 'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0318%2Fr680744_1296x729_16%2D9.jpg',
          'publishedAt': '2020-03-26T09:52:18Z',
          'content': 'The McLaren team member who tested positive for coronavirus ahead of the Australian Grand Prix has returned home to the UK along with colleagues who remained in Melbourne in isolation.\r\nAlexis Nunes, Nate Saunders and Laurence Edmondson discuss Lando Norris\' … [+1410 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Designtaxi.com'
          },
          'author': null,
          'title': 'Stephen King Shares Timely Chapter On Pandemic Spread From His Novel ‘The Stand’',
          'description': 'Image via Amazon Best-selling novelist Stephen King has shared an audio excerpt of his 1978 book, The Stand, which details how he imagines the global flu spreads worldwide. King posted the chilling clip on Twitter with the caption, “Chapter Eight of The Stand…',
          'url': 'https://designtaxi.com/news/409205/Stephen-King-Shares-Timely-Chapter-On-Pandemic-Spread-From-His-Novel-The-Stand/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+designtaxi_news+%28TAXI+Daily+News%29',
          'urlToImage': 'https://editorial.designtaxi.com/editorial-images/news-thestand260320/thestand.jpeg',
          'publishedAt': '2020-03-26T09:52:05Z',
          'content': 'Image via AmazonBest-selling novelist Stephen King has shared an audio excerpt of his 1978 book, The Stand, which details how he imagines the global flu spreads worldwide.\r\nKing posted the chilling clip on Twitter with the caption, “Chapter Eight of The Stand… [+603 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Novinky.cz'
          },
          'author': 'Vlastimil Langer, PhDr.',
          'title': 'Popíjení dvojice mužů bez roušek v trolejbuse ukončili strážníci zlínské městské policie',
          'description': 'O mejdan jako náhradu za zavřené hospody se pokusili dva cestující ve středu 25. března večer v trolejbusu jedoucím na lince mezi Otrokovicemi a Zlínem. Bez roušek popíjeli pivo a obtěžovali další cestující.',
          'url': 'https://www.novinky.cz/vase-zpravy/clanek/popijeni-dvojice-muzu-bez-rousek-v-trolejbuse-ukoncili-straznici-zlinske-mestske-policie-40318155',
          'urlToImage': 'https://d15-a.sdn.cz/d_15/c_img_E_K/i6BUjR.jpeg?fl=cro,0,0,800,450%7Cres,1200,,1%7Cjpg,80,,1',
          'publishedAt': '2020-03-26T09:52:02Z',
          'content': 'Jejich protiprávní poínání ukonila pivolaná hlídka mstské policie, informoval tiskový mluví Dopravní spolenosti Zlín-Otrokovice Vojtch Cekota.\r\nDva mui vybavení zásobou lahvového piva se usadili ve stedu po pl osmé veer v Otrokovicích v kloubovém trolejbusu n… [+885 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Aftonbladet.se'
          },
          'author': 'Ebba Thornéus',
          'title': 'Stora lungförändringar hos svårt sjuka coronapatienter',
          'description': 'Röntgenbilder hos några av de värst drabbade av covid-19 visar ett distinkt mönster av infektionen på lungorna skriver  Los Angeles Times. Nu hoppas man att upptäckten ska hjälpa till att bota sjukdomen.  – De vita fläckarnas mönster kan kanske användas för a…',
          'url': 'https://www.aftonbladet.se/nyheter/a/vQjeM4/stora-lungforandringar-hos-svart-sjuka-coronapatienter',
          'urlToImage': 'https://imgs.aftonbladet-cdn.se/v2/images/5d18929f-54d7-40bb-b43c-a8bacdf5a27a?fit=crop&h=558&q=50&w=992&s=06cc73108c00576c55a15b5fefbd5afdcc85dce2',
          'publishedAt': '2020-03-26T09:51:55Z',
          'content': null
        },
        {
          'source': {
            'id': null,
            'name': 'Meneame.net'
          },
          'author': 'doctoragridulce',
          'title': 'Sacerdote lanza bendición desde helicóptero ante crisis por coronavirus',
          'description': 'A través de redes sociales, el usuario Christian Marcelo Becerra compartió la curiosa experiencia de un padre que subió a un helicóptero con una custodia sagrada para rezar y lanzar una bendición en medio de la crisis por el Covid-19. En el video se observa c…',
          'url': 'https://www.meneame.net/m/ocio/sacerdote-lanza-bendicion-desde-helicoptero-ante-crisis',
          'urlToImage': 'https://www.meneame.net//mnmstatic.net/img/mnm/logo-350x350.png',
          'publishedAt': '2020-03-26T09:51:55Z',
          'content': null
        },
        {
          'source': {
            'id': null,
            'name': 'Chowhound.com'
          },
          'author': 'Cerise1',
          'title': 'Cooking in the time of COVID-19',
          'description': 'For those who are seniors and/or have health issues that prevent you from getting out - shopping etc., I found taskrabbit.com to be helpful. I also downloaded an app called Next door. You get to know your neighbors, and what\'s going on in your neighborhood. R…',
          'url': 'https://www.chowhound.com/post/cooking-time-covid-19-1089608?commentId=10250367#10250367',
          'urlToImage': 'https://chowhound1.cbsistatic.com/s/og_image_default-0a3137f0f61c00cc0f04194aab2f1d5f.jpg',
          'publishedAt': '2020-03-26T09:51:16Z',
          'content': 'Because I live close to several good grocery stores, up until now I have been able to quickly get any ingredients I need. Ive gotten fresh fruits and vegetables as I need them. \r\nBut in this time of COVID-19, it may be inadvisable to go out for groceries and … [+717 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Tvn24.pl'
          },
          'author': 'kz/ec',
          'title': '"Każdy obywatel przeżywa dramat. Nie ma czasu na czekanie, trzeba działać"',
          'description': 'Miliony Polaków, pracowników i pracodawców, czekają na przepisy, które powinny być już wdrażane tak, jak w innych państwach. Tak się nie dzieje, jest dosyć duża opieszałość - mówiła na antenie TVN24 Dorota Gardias, szefowa Forum Związków Zawodowych. W ten spo…',
          'url': 'https://tvn24.pl/polska/koronawirus-w-polsce-dorota-gardias-z-forum-zwiazkow-zawodowych-kazdy-obywatel-przezywa-dramat-trzeba-dzialac-4514623',
          'urlToImage': 'https://tvn24.pl/najnowsze/cdn-zdjecie-qog2nq-dorota-gardias-z-forum-zwiazkow-zawodowych-4514629/alternates/LANDSCAPE_1280',
          'publishedAt': '2020-03-26T09:51:11Z',
          'content': 'Miliony Polaków, pracowników i pracodawców, czekaj na przepisy, które powinny by ju wdraane tak, jak w innych pastwach. Tak si nie dzieje, jest dosy dua opieszao - mówia na antenie TVN24 Dorota Gardias, szefowa Forum Zwizków Zawodowych. W ten sposób odniosa s… [+2439 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Wiadomosci.wp.pl'
          },
          'author': 'oprac. Arkadiusz Jastrzębski',
          'title': 'Koronawirus w Polsce. Ksiądz z okolic Zamościa zakażony koronawirusem',
          'description': 'Drugi przypadek zakażenia koronawirusem w Diecezji Zamojsko-Lubaczowskiej. Chodzi o 42-letniego wikariusza z parafii Łabunie pod Zamościem',
          'url': 'https://wiadomosci.wp.pl/koronawirus-w-polsce-ksiadz-z-okolic-zamoscia-zakazony-koronawirusem-6493043703948929a',
          'urlToImage': 'https://v.wpimg.pl/NDMzMTAxYSUsGDtnbgNsMG9Abz0oWmJmOFh3dm5IYXd0SXssc058cGIeYyMxESMjYwohe3BBen10TH1lckxjdXROfGNwTXdzelUmJygZKj5jED0zYwU=',
          'publishedAt': '2020-03-26T09:51:00Z',
          'content': '"Zaraeniu wirusem uleg drugi ksidz naszej diecezji. Jest to 42-letni wikariusz parafii abunie" - poinformowao biuro prasowe Diecezji Zamojsko-Lubaczowskiej w komunikacie.\r\nKs. Micha Macioek, rzecznik diecezji wyjania, e informacja o zakaeniu duchownego dotara… [+1197 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Iol.co.za'
          },
          'author': 'Bongani Hans',
          'title': 'Lockdown: Commission for Gender Equality working closely with cops to limit abuse',
          'description': 'The Commission for Gender Equality will have foot soldiers working with the police to combat violence against women and children during 21- day Covid-19 lockdown.',
          'url': 'https://www.iol.co.za/news/politics/lockdown-commission-for-gender-equality-working-closely-with-cops-to-limit-abuse-45582333',
          'urlToImage': 'https://image.iol.co.za/image/1/process/1920x366?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/iol/media/image/2020/03/26/45582333/violence-against-women-429778_192.jpg&operation=CROP&offset=0x0&resize=1920x1080',
          'publishedAt': '2020-03-26T09:51:00Z',
          'content': 'By Bongani Hans4m ago\r\nJohannesburg - The Commission for Gender Equality will have foot soldiers working with the police to combat violence against women and children during 21- day Covid-19 lockdown, its spokesperson Javu Baloyi said.\r\nBaloyi made the promis… [+1832 chars]'
        },
        {
          'source': {
            'id': null,
            'name': 'Dialogos.com.cy'
          },
          'author': 'Κάλια Ανδρέου',
          'title': 'Σε κίνδυνο εκατοντάδες χιλιάδες θέσεις εργασίας',
          'description': 'Σε κίνδυνο εκατοντάδες χιλιάδες θέσεις εργασίας, λήψη μέτρων κοινωνικής προστασίας ζητάει η ΔΟΕ Τον κίνδυνο τον οποίο διατρέχουν εκατοντάδες θέσεις εργασίας αλλά και πολίτες που δεν έχουν πρόσβαση σε υπηρεσίες υγείας επισημαίνει η Διευθύντρια του Τμήματος Κοι…',
          'url': 'https://dialogos.com.cy/se-kindyno-ekatontades-chiliades-theseis-ergasias/',
          'urlToImage': 'https://dialogos.com.cy/wp-content/uploads/2019/10/ergazomenoi.jpg',
          'publishedAt': '2020-03-26T09:50:23Z',
          'content': '() , .\r\n COVID-19 , , , , .\r\n« , , », .\r\n , , .\r\n . , 40% .\r\n 800 . 10% 100 . . , , , COVID-19.\r\n« », .\r\n , , .\r\n , , .\r\n«, », .\r\n , , .\r\n 55% , . , , , , .\r\n COVID-19, , .\r\n . . , 2008, , .\r\n 2015 2030 .\r\n, COVID-19, , .\r\n , , , .\r\n , 1,6% . , , 5,6% . .\r\n, … [+114 chars]'
        }
      ]
    }
    ];
  slides: any = [[]];

  chunk(arr: any, chunkSize: any) {
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      this.R.push(arr.slice(i, i + chunkSize));
    }
    return this.R;
  }

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {


    this.apiService.getNews().subscribe((news) => {
      this.news = news;


      console.log(this.news.articles.author);

    });


    this.slides = this.chunk(this.cards, 3);
  }

}
