
const fs = require('fs')
const chalk = require('chalk')


//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtu.be/h6mDdkH9GMg'
global.ig = 'https://www.instagram.com/-935/?hl=id'
global.mygc = 'wa.me/628228082213'
global.myweb = 'https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'
global.linkgrupss = "https://chat.whatsapp.com/BPidzX2w0TM1o8odz4EgZo"
global.linkpro = 'xdarkfamous@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'xdark screm@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'XDark Screm' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'XDark Screm' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'XDark Screm' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6282278082114']
global.packname = 'XDark Screm'
global.ownerr = ['XDark Screm']
global.author = 'Dark'
global.sessionName = './sessionye/haikal'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {    
    wait: 'Waiting....',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
}
//=================================================//

//=================================================//

//=================================================//
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.visoka = fs.readFileSync("./baseikal/video/hikal.gif")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
global.menuimg = 'https://f.top4top.io/p_2467io6an0.jpg'
global.ggikal = fs.readFileSync("./baseikal/video/haikal.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
