"use strict";

require("../config/env");

var _connection = _interopRequireDefault(require("../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functionToCall = process.argv[2];
var myFunctions = {
  createDatabase: createDatabase,
  dropDatabase: dropDatabase,
  createUsersTable: createUsersTable,
  createProductsTable: createProductsTable
}; // Functions

async function createDatabase() {
  try {
    var dbName = process.argv[3];
    await _connection.default.schema.raw('CREATE DATABASE ' + dbName);
  } catch (error) {
    console.log(error);
  }

  _connection.default.destroy();
}

async function dropDatabase() {
  try {
    var dbName = process.argv[3];
    await _connection.default.schema.raw('DROP DATABASE ' + dbName);
  } catch (error) {
    console.log(error);
  }

  _connection.default.destroy();
}

async function createUsersTable() {
  try {
    await _connection.default.schema.raw(`
        DROP TABLE IF EXISTS "products";
        
        CREATE TABLE "users" (
            id SERIAL PRIMARY KEY,
            name varchar(255) default NULL,
            email varchar(255) default NULL
          );
          
          INSERT INTO "users" (name,email) VALUES ('Zephr Boone','volutpat@nisi.edu'),('Cathleen Barnes','ipsum.dolor@placerataugueSed.edu'),('Anastasia Barrera','dictum@Aliquam.co.uk'),('Rhiannon Joyner','libero.Morbi.accumsan@euerosNam.edu'),('Bo Adams','convallis.ante.lectus@eget.co.uk'),('Joan Bryan','fermentum@lectusjustoeu.org'),('Rowan Lambert','augue.eu.tempor@Curabitursedtortor.ca'),('Kylan Estrada','gravida.non.sollicitudin@egestas.net'),('Violet Grimes','Cum.sociis.natoque@ac.edu'),('Shoshana Riley','et.tristique.pellentesque@erosnonenim.co.uk');
          INSERT INTO "users" (name,email) VALUES ('Evelyn Jennings','magna.Suspendisse.tristique@sapiengravida.com'),('Veronica Rojas','pede@Pellentesque.edu'),('Elizabeth Vaughn','ipsum.porta@facilisisvitaeorci.org'),('Casey Torres','enim.non@Classaptent.ca'),('Lee Salinas','Cras@nequepellentesquemassa.com'),('Halla Whitfield','ultrices.posuere@nuncQuisque.net'),('Remedios Reyes','purus@eteros.ca'),('Idola Mckenzie','egestas.Aliquam@lobortis.net'),('Cally Mosley','Quisque.libero@iaculis.com'),('Blythe Zamora','dapibus@tempusscelerisquelorem.ca');
          INSERT INTO "users" (name,email) VALUES ('Rhiannon Walls','elit.dictum.eu@lobortis.com'),('Aurelia Luna','Vestibulum.ante@enimcondimentum.net'),('Unity Potts','tellus.id.nunc@luctuslobortis.org'),('Keiko Knox','mi.tempor.lorem@Donec.com'),('Jacqueline Navarro','vitae.erat@tellussem.org'),('Mira Atkinson','habitant@CrasinterdumNunc.net'),('MacKenzie Durham','magnis.dis@mattisIntegereu.com'),('Sybil Rush','dolor.tempus@nisisemsemper.co.uk'),('Tallulah Castro','elit.Curabitur@velvenenatis.co.uk'),('Shelby Lloyd','lectus.Cum.sociis@sagittisDuis.net');
          INSERT INTO "users" (name,email) VALUES ('Camille Kirkland','Vivamus.molestie.dapibus@risusNuncac.net'),('Astra Head','velit@hendrerit.ca'),('Cecilia Herring','nec@in.co.uk'),('Brittany Mcgee','tristique@euaugueporttitor.co.uk'),('Tallulah Wall','Nam@idmollis.ca'),('Sara Clemons','at@nisisem.co.uk'),('Wyoming Manning','Cras.dolor.dolor@Nullamfeugiat.org'),('Laura England','Nullam.suscipit@justo.net'),('Xaviera Sandoval','ligula@ultricesiaculis.net'),('Aline Smith','mi@maurisblanditmattis.co.uk');
          INSERT INTO "users" (name,email) VALUES ('Quemby Beard','vestibulum.lorem@eleifendnunc.com'),('Noel Delaney','luctus@faucibus.edu'),('Nelle Young','sapien.Nunc@ac.org'),('Shelby Hale','tincidunt.nibh@tristiqueac.edu'),('Ingrid Stevens','ultricies@nec.org'),('Basia Vinson','gravida.Praesent.eu@ut.com'),('Unity Ferguson','Morbi.sit@vitae.com'),('Kelsie Simon','Duis@ultriciessemmagna.com'),('Rose Sargent','nascetur.ridiculus@primisinfaucibus.org'),('Iona Matthews','erat.eget@ipsumnonarcu.org');
          INSERT INTO "users" (name,email) VALUES ('Hiroko Leon','eu.accumsan.sed@Sedneque.ca'),('Rowan Barnett','nunc@nislMaecenas.co.uk'),('Risa George','et@elit.ca'),('Nita Nieves','purus@euismodmauris.ca'),('Jade Kelley','est.congue.a@Loremipsumdolor.co.uk'),('Hanna Bruce','diam.vel.arcu@vitae.org'),('Aurora Wright','quis.pede.Suspendisse@pellentesquea.edu'),('Karen Clark','tellus.lorem.eu@aliquamadipiscinglacus.net'),('Jada Glenn','vitae.diam@sem.edu'),('Virginia Little','felis.eget@Duisa.ca');
          INSERT INTO "users" (name,email) VALUES ('Simone Ray','Mauris@enimCurabiturmassa.org'),('Shaeleigh Murphy','massa.Suspendisse.eleifend@diamPellentesquehabitant.org'),('Hilda Deleon','ante.Vivamus.non@Maecenasmalesuadafringilla.edu'),('Frances Levine','et.arcu@orcisem.com'),('Stacey Hodge','dapibus.gravida@pedeetrisus.co.uk'),('Imani Knox','arcu@posuereat.co.uk'),('Kirsten Ewing','ac@Duisgravida.edu'),('Rylee Booker','ridiculus@euismod.org'),('Daria Wiley','lacinia.Sed@mollis.com'),('Britanni Wolfe','dis.parturient.montes@estNunc.co.uk');
          INSERT INTO "users" (name,email) VALUES ('Iona Pate','Proin.ultrices@aliquetmolestietellus.ca'),('Hedda Barrett','at.velit.Pellentesque@augue.com'),('Daphne Love','Donec@ullamcorperDuiscursus.ca'),('Tasha Peck','quis.lectus@fermentummetus.ca'),('Karyn Vaughn','dapibus.quam@eratsemperrutrum.net'),('Tara Ruiz','vel.nisl@etrutrum.com'),('Jillian Massey','egestas.a.scelerisque@quis.net'),('Hannah Trevino','quis.tristique.ac@necanteblandit.com'),('Yvette Nichols','eu.euismod@neque.ca'),('Nita Robinson','Etiam@neque.co.uk');
          INSERT INTO "users" (name,email) VALUES ('Celeste Buckner','ac.libero.nec@consectetuer.ca'),('Idona Bray','nisl.Nulla.eu@In.co.uk'),('Geraldine Poole','ipsum.leo@ut.com'),('Alexa Raymond','euismod.et@Integersemelit.net'),('Calista Martinez','bibendum.Donec.felis@massaIntegervitae.ca'),('Melinda Prince','fringilla.purus.mauris@Nullamenim.ca'),('Ori Larsen','non.nisi@acrisusMorbi.co.uk'),('Rhona Flynn','pellentesque@atlacus.net'),('Rose Daugherty','Duis@magnisdisparturient.edu'),('Cassady Fisher','cursus.diam.at@auctorvitae.edu');
          INSERT INTO "users" (name,email) VALUES ('Signe Mcclain','nisi.Cum@convallisestvitae.com'),('Destiny Bowers','vitae@adipiscingMauris.ca'),('Jemima Whitley','sed.sem.egestas@vitaenibh.ca'),('Charde Montgomery','aliquet.Proin@vitaeorci.org'),('Ori Gaines','eget.volutpat.ornare@venenatislacus.edu'),('Macey Hayes','sapien.cursus.in@Duisdignissimtempor.ca'),('Whitney Padilla','tristique@odio.edu'),('Rina Dillard','convallis@tellusid.edu'),('Sonia Sutton','dolor.tempus@Vivamusrhoncus.com'),('Brittany Meyer','Mauris@utnisi.co.uk');
          
        `);
  } catch (error) {
    console.log(error);
  }

  _connection.default.destroy();
}

;

async function createProductsTable() {
  try {
    await _connection.default.schema.raw(`
            DROP TABLE IF EXISTS "products";

            CREATE TABLE "products" (
            id SERIAL PRIMARY KEY,
            name TEXT default NULL,
            description TEXT default NULL,
            price varchar(100) default NULL
            );

            INSERT INTO "products" (name,description,price) VALUES ('nonummy.','magna a neque. Nullam ut nisi a odio','7.43'),('sit','Sed id risus quis diam','0.19'),('enim','libero nec ligula consectetuer rhoncus. Nullam velit dui,','7.03'),('sagittis','Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est.','7.81'),('Nunc','pretium neque. Morbi quis urna. Nunc','2.15'),('turpis','euismod est arcu ac orci. Ut semper pretium','0.46'),('Suspendisse','dictum placerat, augue. Sed molestie. Sed id risus','4.86'),('eget','posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet','8.47'),('mauris','Phasellus dolor elit, pellentesque a, facilisis non, bibendum','3.79'),('Etiam','dui. Suspendisse ac metus vitae velit egestas lacinia. Sed','4.85'),('nibh.','adipiscing non, luctus sit amet, faucibus','6.07'),('magna.','Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem,','6.42'),('dui','egestas. Sed pharetra, felis eget','0.51'),('interdum','at arcu. Vestibulum ante ipsum primis in','9.98'),('erat.','Aenean massa. Integer vitae nibh. Donec est','1.01'),('purus','lectus quis massa. Mauris vestibulum,','9.54'),('tincidunt','mauris ipsum porta elit, a feugiat tellus lorem eu metus.','4.12'),('odio.','et, lacinia vitae, sodales at,','5.70'),('id','natoque penatibus et magnis dis parturient montes, nascetur','1.30'),('eu','pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est.','1.43');
            INSERT INTO "products" (name,description,price) VALUES ('consectetuer','quis urna. Nunc quis arcu vel','3.56'),('Fusce','velit justo nec ante. Maecenas mi','9.47'),('Morbi','leo. Vivamus nibh dolor, nonummy ac, feugiat non,','0.89'),('Nulla','augue eu tellus. Phasellus elit','9.60'),('risus','eu augue porttitor interdum. Sed auctor odio a purus. Duis','6.38'),('tincidunt,','ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc','5.40'),('elit,','non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra','6.49'),('eu,','sapien. Nunc pulvinar arcu et pede.','9.74'),('ligula.','Donec nibh. Quisque nonummy ipsum','5.40'),('auctor','lobortis risus. In mi pede, nonummy ut, molestie in,','5.27'),('nisi.','quis, pede. Praesent eu dui. Cum sociis','7.16'),('Nunc','ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat','5.01'),('Donec','Cras interdum. Nunc sollicitudin commodo ipsum.','6.47'),('lobortis','arcu. Sed eu nibh vulputate mauris','2.38'),('sem','Quisque libero lacus, varius et, euismod et,','0.72'),('pretium','Duis dignissim tempor arcu. Vestibulum ut eros non enim','4.47'),('lacinia','et arcu imperdiet ullamcorper. Duis at lacus. Quisque','8.34'),('nibh.','consectetuer euismod est arcu ac orci. Ut semper pretium neque.','2.85'),('turpis','Integer vulputate, risus a ultricies adipiscing, enim mi tempor','9.08'),('pharetra,','vel turpis. Aliquam adipiscing lobortis risus. In mi','5.53');
            INSERT INTO "products" (name,description,price) VALUES ('elit.','mus. Proin vel nisl. Quisque fringilla euismod enim.','5.95'),('enim.','nisl. Maecenas malesuada fringilla est.','5.13'),('id,','nisi. Cum sociis natoque penatibus','0.93'),('a','scelerisque dui. Suspendisse ac metus vitae velit','7.29'),('Nulla','vitae diam. Proin dolor. Nulla semper tellus id','3.73'),('ut','dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas','7.91'),('porttitor','feugiat tellus lorem eu metus. In lorem.','3.60'),('primis','Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam','0.90'),('metus','magna tellus faucibus leo, in lobortis','1.86'),('neque.','Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris,','9.78'),('sollicitudin','nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor','3.60'),('auctor,','libero. Integer in magna. Phasellus dolor elit,','8.27'),('Nullam','sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices','5.88'),('quam','consequat auctor, nunc nulla vulputate dui,','1.21'),('cursus','congue turpis. In condimentum. Donec at arcu.','5.16'),('imperdiet','non enim. Mauris quis turpis vitae purus gravida sagittis.','2.27'),('Suspendisse','tempor bibendum. Donec felis orci, adipiscing non, luctus','8.96'),('et','mi, ac mattis velit justo nec ante. Maecenas mi','1.56'),('lacus.','in lobortis tellus justo sit amet','8.77'),('ultrices','purus gravida sagittis. Duis gravida. Praesent','5.17');
            INSERT INTO "products" (name,description,price) VALUES ('ut','cursus luctus, ipsum leo elementum sem, vitae aliquam','1.72'),('tempus','sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque','9.12'),('enim','cursus, diam at pretium aliquet,','0.39'),('a,','id magna et ipsum cursus vestibulum. Mauris magna. Duis','4.78'),('lobortis','sodales nisi magna sed dui. Fusce aliquam, enim','1.21'),('neque.','fringilla ornare placerat, orci lacus vestibulum lorem,','1.03'),('parturient','nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque','7.00'),('turpis.','urna. Nunc quis arcu vel quam','5.57'),('Donec','eleifend egestas. Sed pharetra, felis eget varius','0.83'),('Fusce','lacinia at, iaculis quis, pede. Praesent eu dui.','2.02'),('placerat.','magna. Cras convallis convallis dolor. Quisque','1.32'),('nisi','Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque.','1.12'),('pede','malesuada malesuada. Integer id magna et ipsum','3.73'),('lectus','tincidunt, neque vitae semper egestas,','1.58'),('at','id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis','8.56'),('quis','Integer mollis. Integer tincidunt aliquam arcu. Aliquam','9.58'),('posuere','lobortis quam a felis ullamcorper viverra. Maecenas','2.79'),('mi','Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu.','9.72'),('sit','dolor quam, elementum at, egestas a, scelerisque sed,','1.93'),('auctor','lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus.','7.92');
            INSERT INTO "products" (name,description,price) VALUES ('porta','aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu','6.74'),('id,','faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus','8.84'),('Cras','enim, gravida sit amet, dapibus id, blandit at,','5.31'),('Suspendisse','sodales at, velit. Pellentesque ultricies','7.32'),('Ut','ornare placerat, orci lacus vestibulum lorem, sit amet','3.39'),('mauris,','sit amet metus. Aliquam erat','9.15'),('amet','urna suscipit nonummy. Fusce fermentum','9.69'),('mollis','vestibulum lorem, sit amet ultricies sem magna','4.38'),('non','Morbi vehicula. Pellentesque tincidunt tempus risus.','1.06'),('id,','vulputate, nisi sem semper erat, in consectetuer ipsum nunc id','1.02'),('sed','egestas. Duis ac arcu. Nunc','9.45'),('Suspendisse','Nulla semper tellus id nunc interdum feugiat.','6.55'),('diam','Morbi quis urna. Nunc quis arcu vel quam dignissim','0.30'),('varius','fames ac turpis egestas. Fusce aliquet magna a','8.61'),('scelerisque','amet, risus. Donec nibh enim, gravida sit amet, dapibus id,','3.63'),('massa.','dis parturient montes, nascetur ridiculus mus. Proin vel','9.49'),('nibh','vitae purus gravida sagittis. Duis gravida. Praesent','7.01'),('pede','turpis. In condimentum. Donec at arcu. Vestibulum','1.20'),('in','arcu eu odio tristique pharetra. Quisque','3.21'),('eget','dis parturient montes, nascetur ridiculus mus. Aenean eget','4.61');
        `);
  } catch (error) {
    console.log(error);
  }

  _connection.default.destroy();
}

;
myFunctions[functionToCall]();