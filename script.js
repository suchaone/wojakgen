window.onload = function() {

  var NOUN              = [ 'cat', 'dog', 'sheep', 'man', 'woman', 'ball', 'tree', 'lake', 'stick', 'rock', 'river', 'hat', 'shoe', 'staff', 'cloak', 'coin' ];
  var ADJECTIVE         = [ 'deranged', 'deluded', 'uncanny', 'wayward', 'fiery', 'big', 'tiny', 'violent', 'lying', 'omnipresent', 'omniscient', 'fearful', 'brave', 'friendly', 'playful' ];
  var NATIONALITY       = [ 'canadian', 'american', 'russian', 'ukrainian', 'european', 'german', 'uzbek', 'albanian', 'algerian', 'armenian', 'australian', 'brit', 'dane', 'finn', 'swede', 'filipino', 'georgian', 'greek', 'israeli', 'macedonian', 'mongol', 'polack', 'spaniard', 'turk', 'arab', 'saudi', 'bedouin', 'algerian', 'egyptian', 'ethiopian', 'palestinian', 'jew', 'serb', 'indonesian', 'korean', 'armenian', 'aramean', 'gypsy', 'goy', 'mexican', 'cuban', 'colombian', 'african american', 'black', 'viet', 'desi' ];
  var RELIGION          = [ 'christian', 'jewish', 'zoroastrian', 'animist', 'atheist', 'gnostic', 'agnostic', 'hindu', 'sikh', 'orthodox', 'catholic', 'sunni', 'shia', 'sufi', 'orthodox jewish', 'russian orthodox', 'protestant', 'baptist', 'satanist', 'taoist', 'buddhist' ];
  var GREEKNAMES        = [[ 'Acamas', 'Alekos', 'Alexander', 'Alexis', 'Alexius', 'Anastasius', 'Andreas', 'Angelos ', 'Apostolos ', 'Ari ', 'Aristophanes ', 'Athan', 'Athanasios ', 'Athanasius ', 'Charis ', 'Christodoulos', 'Christos ', 'Chrysanthos', 'Costas', 'Cyriacus ', 'Damaskinos', 'Damian ', 'Demetre', 'Demetrius', 'Dimitris', 'Dysmas ', 'Eleutherios', 'Elias', 'Emmanouil', 'Eustathius', 'Evangelos', 'Saint George', 'Georgios', 'Giorgos', 'Gregory ', 'Homer ', 'Ioannis', 'Isidore', 'Jason ', 'John ', 'Joseph', 'Kokos', 'Konstantinos', 'Lambros', 'Lefter', 'Leonidas ', 'Loukas', 'Lycurgus', 'Manolis', 'Marcos ', 'Mario ', 'Marios', 'Matthaios', 'Miltiades ', 'Mitsos', 'Nestor ', 'Nicephorus', 'Nicetas', 'Nicholas', 'Nikolaos', 'Nikos', 'Orestes ', 'Panagiotis', 'Pantelis', 'Paraskevas ', 'Paris ', 'Pavlos', 'Perikles ', 'Peter ', 'Phaedon ', 'Plutarch ', 'Polychronis', 'Pygmalion ', 'Sakis', 'Sotirios', 'Sotiris', 'Spiridon', 'Spiro ', 'Spyridon', 'Stathis', 'Stavros', 'Stelios', 'Tassos', 'Thanasis', 'Thanos ', 'Themistocles ', 'Theodore ', 'Theofanis', 'Theophilus', 'Therapont', 'Timothy ', 'Ulysses ', 'Vassilios', 'Yannis', 'Zenobios', 'Zoilos' ], [ 'Alexandra', 'Alina', 'Amalia', 'Amaryllis', 'Anastasia', 'Angeliki', 'Angelina', 'Anna', 'Callisto', 'Carissa', 'Cassandra', 'Charis', 'Chloe', 'Christa', 'Christina', 'Christine', 'Crino', 'Cynthia', 'Daphne', 'Despina', 'Dina', 'Dolores', 'Dorothea', 'Eftychia', 'Ekaterini', 'Elektra', 'Elena', 'Eleni', 'Eliana', 'Elina', 'Eudoxia', 'Eunice', 'Euthemia', 'Fotini', 'Georgia', 'Georgiana', 'Giada', 'Helen', 'Helena', 'Helene', 'Hermione', 'Hero', 'Hilda', 'Ioanna', 'Irene', 'Ivy', 'Julia', 'Karina', 'Lena', 'Lydia', 'Margaret', 'Maria', 'Marianne', 'Mary', 'Medea', 'Melania', 'Melina', 'Melissa', 'Moira', 'Nadia', 'Natalia', 'Nika', 'Nikoleta', 'Nikolina', 'Nina', 'Olga', 'Olympias', 'Panorea', 'Paraskevi', 'Philippa', 'Phoebe', 'Sandra', 'Sophia', 'Sotiria', 'Stamatia', 'Stefania', 'Tatiana', 'Theodora', 'Valeria', 'Vassiliki', 'Yianna', 'Zenobia', 'Zoe' ]];
  var GREEKSURNAMES     = [ 'afroudakis', 'alexandris', 'alexandrou', 'alexiou', 'alexopoulos', 'anastasopoulos', 'andreadis', 'andreou', 'andrianopoulos', 'androulakis', 'angelopoulos', 'antoniadis', 'antoniou', 'antonopoulos', 'apostolidis', 'apostolou', 'argyropoulos', 'argyros', 'athanasiadis', 'avramidis', 'bakirtzis', 'bakoyannis', 'batziolas', 'bernardakis', 'botsaris', 'botsis', 'calathes', 'calazans', 'calligaris', 'carras', 'cassavetes', 'chalkias', 'cholevas', 'chondroyannos', 'christakis', 'christodoulopoulos', 'christodoulou', 'christopoulos', 'christos ', 'christou', 'cirillo', 'cora', 'costas', 'daskalakis', 'diamantopoulos', 'dimas ', 'dimitriadis', 'dimitriou', 'dimopoulos', 'dousmanis', 'doxiadis', 'dragoumis', 'fotakis', 'fotilas', 'fotiou', 'fotopoulos', 'frangos ', 'galifianakis ', 'gavalas', 'gavras', 'gazis', 'georgiadis', 'georgiou', 'giannakopoulos', 'giannopoulos', 'glezos', 'hatzi', 'hatzidakis', 'hatzimichalis', 'hatzis', 'hrisoverghi', 'iakovou', 'iliopoulos', 'ioannidis', 'ioannou', 'kafatos', 'kaklamanis', 'kalogeropoulos', 'kanakaris', 'karas ', 'karras', 'katechis', 'katrakis', 'katsifaras', 'kefalogiannis', 'kiriakidis', 'kokkinakis', 'kolettis', 'konstantinidis', 'konstantinou', 'konstantopoulos', 'kontogouris', 'kontos', 'kotzias', 'koufos', 'koundouros', 'kourakis', 'koutsis', 'koutsopoulos', 'krestenitis', 'kriezis', 'kyriakou', 'kyrkos', 'labropoulos', 'lambrakis', 'latsis', 'leandros', 'leichoudes', 'lekkas', 'leon ', 'leventis', 'liourdis', 'logothetis', 'louganis', 'loverdos', 'maimonides ', 'makris', 'manetas', 'manolas', 'manousakis', 'mantalos', 'mantzaris', 'marangos', 'mardas', 'margaritis', 'markakis', 'markopoulos', 'matraxia', 'matsoukas', 'miaoulis', 'michailidis', 'mitropoulos', 'mitsotakis', 'mitzou', 'moustakas', 'moysiadis', 'nafpliotis', 'nakos', 'nerantzis', 'nevrakis', 'nikolaidis', 'nikolopoulos', 'nikoloudis', 'notaras', 'oikonomopoulos', 'oikonomou', 'orologas', 'pallis', 'panagakos', 'panagiotopoulos', 'panayiotou', 'panousis', 'papachristos', 'papadakis', 'papadiamantopoulos', 'papadopoulos', 'papageorgiou', 'papageorgopoulos', 'papaioannou', 'papajohn', 'papakonstantinou', 'papanastasiou', 'papandreou', 'papanikolaou', 'papantoniou', 'papathanasiou', 'papazoglou', 'papoulias', 'pappas', 'paraskevas ', 'paraskevopoulos', 'pavlidis', 'pavlopoulos', 'pavlou', 'petimezas', 'petinos', 'petridis', 'philippidis', 'rallis', 'raskopoulos', 'rodocanachi', 'roubanis', 'rouphos', 'roussopoulos', 'sakellaridis', 'sakellarios ', 'samaras', 'savalas', 'savva', 'savvas ', 'servopoulos', 'sgouros', 'sifakis', 'simopoulos', 'sisinis', 'skarlatos', 'skourletis', 'spanos', 'spheeris' ];
  var RUSNAMES          = [[ 'alexei', 'andrei', 'arkady', 'anton', 'anatoly', 'artyom', 'boris', 'vadim', 'valentin', 'vlad', 'vladimir', 'vladislav', 'igor', 'yuri', 'sergei', 'nikita' ], [ 'tanya', 'katya', 'natasha', 'anna', 'lena', 'svetlana', 'valeria', 'xenia', 'zoya', 'nina', 'oksana', 'marina', 'irina', 'inna', 'antastasia' ]];
  var SWEDENAMES        = [[ 'William', 'Lucas', 'Liam', 'Oscar', 'Elias', 'Hugo', 'Oliver', 'Charlie', 'Axel', 'Vincent', 'Alexander', 'Noah', 'Leo', 'Ludvig', 'Adam', 'Arvid', 'Nils', 'Elliot', 'Filip', 'Leon', 'Melvin', 'Viktor', 'Valter', 'Edvin', 'Benjamin', 'Isak', 'Alfred', 'Theo', 'Emil', 'Harry', 'Olle', 'Love', 'Theodor', 'Anton', 'Sixten', 'Erik', 'Adrian', 'Albin', 'Gustav', 'Melker', 'Malte', 'Ebbe', 'Mohamed', 'Gabriel', 'Alvin', 'Max', 'August', 'Josef', 'Viggo', 'Casper', 'Colin', 'Sam', 'Noel', 'Loke', 'Loui', 'Henry', 'Wilmer', 'Kevin', 'Sigge', 'Vidar', 'Carl', 'Jacob', 'Frank', 'Jonathan', 'Matteo', 'Milton', 'Jack', 'Milo', 'Elton', 'Felix', 'Ville', 'Simon', 'Wilhelm', 'Samuel', 'Vilgot', 'Julian', 'Otto', 'Sebastian', 'John', 'Elis', 'Daniel', 'Ivar', 'Joel', 'Tage', 'David', 'Aron', 'Hjalmar', 'Kian', 'Rasmus', 'Eddie', 'Maximilian', 'Algot', 'Linus', 'Alex', 'Ali', 'Edward', 'Ture', 'Elvin', 'Folke' ], [ 'Agatha', 'Agnes', 'Aina', 'Albina', 'Amalia', 'Amelia', 'Anna', 'Anneli', 'Anneliese', 'Antonia', 'Aurora', 'Beata', 'Birgitta', 'Bodil', 'Britta', 'Carin', 'Carolina', 'Caroline', 'Cecilie', 'Charlotte', 'Christa', 'Dagmar', 'Ebba', 'Elín', 'Elina', 'Ellen', 'Elsa', 'Emma', 'Erika', 'Estelle', 'Filippa', 'Frida', 'Göta', 'Greta', 'Grete', 'Gun', 'Gunilla', 'Gunnel', 'Heidi', 'Helena', 'Helene', 'Helga', 'Henrika', 'Hilda', 'Hildur', 'Hulda', 'Imogen', 'Indira', 'Ingrid', 'Isa', 'Isabella', 'Judith', 'Justina', 'Kajsa', 'Karen', 'Karin', 'Katarina', 'Katja', 'Kerstin', 'Krista', 'Kristi', 'Kristin', 'Lina', 'Linnéa', 'Love', 'Lovisa', 'Malin', 'Margareta', 'Maria', 'Marianne', 'Monika', 'Nina', 'Olivia', 'Pearl', 'Pernilla', 'Petunia', 'Rebecka', 'Richenza', 'Rita', 'Ronja', 'Selma', 'Susanna', 'Susanne', 'Tara', 'Tove', 'Ulrica', 'Valerie', 'Veronica', 'Victoria', 'Ylva' ]];
  var JEWNAMES          = [[ 'amos', 'ariel', 'ari', 'avigdor', 'benyamin', 'boaz', 'chaim', 'david', 'eli', 'moshe'], ['avital', 'carmel', 'deborah', 'efrat', 'ilana', 'maya', 'naama', 'rache', 'sarah', 'tal']];
  var VIETSURNAMES      = [ 'nguyen', 'tran', 'le', 'pham', 'huynh', 'phan', 'vu', 'vo', 'dang', 'ngo', 'do', 'bui', 'ho', 'duong' ];
  var WHITENAMES        = [[ 'james', 'john', 'robert', 'michael', 'david', 'richard', 'daniel', 'paul', 'mark', 'donald', 'george', 'steve', 'jeff', 'larry', 'josh', 'dennis', 'carl', 'harold', 'doug', 'joe', 'justin', 'harry', 'bruce', 'aaron', 'jesse', 'craig', 'leonard', 'stanley', 'nate', 'alex', 'leo', 'tim', 'zack', 'brad', 'neil', 'jim', 'bob', 'bobby', 'xander', 'ethan', 'adam', 'baxter', 'caleb', 'matt', 'robert', 'robin', 'gabriel', 'gabe', 'ray', 'raymond', 'phil', 'toby', 'bart', 'arlo', 'abel', 'ace', 'adir', 'aidan', 'aiden', 'al', 'alvin', 'andre', 'ansel', 'anthony', 'tony', 'antoine', 'aric', 'arnie', 'arnold', 'arthur', 'austin', 'barney', 'barry', 'benjamin', 'ben', 'brandon', 'brent', 'chad', 'bryan', 'buster', 'calvin', 'casey', 'cecil', 'cedric', 'chase', 'chandler', 'charlie', 'chip', 'chris', 'christopher', 'claude', 'cletus', 'cliff', 'cody', 'cyril', 'cyrus', 'damion', 'dan', 'darcy', 'darian', 'darren', 'daryl', 'dean', 'shawn', 'dominic', 'douggie', 'drew', 'dudley', 'dustin', 'ed', 'dylan', 'elliot', 'zeke' ], ['ashley', 'emma', 'emily', 'emma', 'madison', 'olivia', 'isabella', 'samantha', 'hannah', 'liz', 'alexis', 'sarah', 'lily', 'jen', 'kaylee', 'alison', 'zoe', 'paige', 'andrea', 'leah', 'claire', 'molly', 'amy', 'natalie', 'elise', 'lindsay', 'monica']];
  var WHITESURNAMES     = ['smith', 'john', 'william', 'jone', 'brown', 'miller', 'will', 'moore', 'tayor', 'ander', 'jack', 'white', 'harris', 'martin', 'thomp', 'robin', 'clark', 'lewis', 'lee', 'walker', 'hall', 'allen', 'young', 'king', 'wright', 'hill', 'scott', 'green', 'edward', 'turner', 'parker', 'stewart', 'roger', 'perez', 'carter', 'baker', 'adam', 'morris', 'roger', 'gray', 'jenkin', 'cole', 'aker', 'albert', 'apple', 'arring', 'arthur', 'atkin', 'atwood', 'bank', 'barker', 'bate', 'beck', 'becket', 'bell', 'bennet', 'blake', 'bonner', 'booth', 'bourne', 'bran', 'brant', 'bryant', 'brown' ];
  var HISPANICNAMES     = [[ 'jose', 'juan', 'francisco', 'jesus', 'antonio', 'alejandro', 'miguel', 'pedro', 'manuel', 'ricardo', 'fernando', 'carlos', 'rafael', 'elias', 'raul', 'diego', 'pablo' ], [ 'Addys', 'Adriana', 'Agustina', 'Aldea', 'Alejandra', 'Alma', 'Amalia', 'Amparo', 'Ana', 'Anabel', 'Andrea', 'Andreina', 'Anita', 'Antonia', 'Araceli', 'Aurora', 'Bianca', 'Blanca', 'Blanche', 'Bonita', 'Carlota', 'Carmelita', 'Carolina', 'Catalina', 'Claudia', 'Concepción', 'Conchita', 'Consuelo', 'Cristina', 'Cynthia', 'Delia', 'Diana', 'Dolores', 'Elena', 'Eliana', 'Elisa', 'Elvira', 'Emily', 'Erika', 'Ester', 'Eva', 'Fatima', 'Fernanda', 'Flavia', 'Flora', 'Gabriela', 'Guiomar', 'Helena', 'Hilda', 'Ileana', 'Ilona', 'Imelda', 'Ines', 'Inez', 'Isa', 'Isabel', 'Isabella', 'Ivonne', 'Jacin', 'Jacinta', 'Jacqueline', 'Joaquina', 'Josefina', 'Juana', 'Julia', 'Justina', 'Karina', 'Lana', 'Lara', 'Laura', 'Lena', 'Lolita', 'Luisa', 'Lupe', 'Lupita', 'Macarena', 'Magdalena', 'Manuela', 'Marcela', 'Margarita', 'Maria', 'María de Lourdes', 'María José', 'Mariela', 'Marina', 'Marisa', 'Marisol', 'Marta', 'Maura', 'Maya', 'Melania', 'Melina', 'Mercedes', 'Meritxell', 'Millaray', 'Morena', 'Nadia', 'Natalia', 'Nina', 'Noelia', 'Núria', 'Olga', 'Paulina', 'Pilar', 'Rachel', 'Ramona', 'Raquel', 'Rita', 'Rocío', 'Rosa', 'Salma', 'Sandra', 'Simone', 'Soledad', 'Sonia', 'Sophia', 'Soraya', 'Tamara', 'Tara', 'Tatiana', 'Tina', 'Tomasa', 'Urraca', 'Valentina', 'Valeria', 'Victoria', 'Vilma', 'Viola', 'Virginia', 'Viridiana', 'Xiomara', 'Zulema' ]];
  var HISPANICSURNAMES  = ['santos', 'garcia', 'lopez', 'rodriguez', 'hernandez', 'martinez', 'gonzalez', 'perez', 'sanchez', 'ramirez', 'flores', 'torres', 'rivera', 'diaz', 'cruz', 'alvarez', 'castillo', 'romero', 'vega' ];
  var COLOMBIANSURNAMES = [ 'Rodríguez', 'Gómez', 'González', 'Martínez', 'García', 'López', 'Hernández', 'Sánchez', 'Ramírez', 'Pérez', 'Días', 'Muñoz', 'Rojas', 'Moreno', 'Jiménez', 'Escobar' ];
  var DESINAMES         = [[ 'abhay', 'abhinav', 'abhishek ', 'adarsh', 'adesh', 'adhar', 'ajay ', 'ajish', 'ajit ', 'akhil', 'ambika ', 'amit', 'ammar ', 'ananya', 'anil ', 'anirban', 'aniruddha ', 'ankit', 'anuj ', 'anup', 'anupam ', 'anurag', 'apoorva ', 'arjun ', 'arnab', 'arun ', 'arvind', 'arya ', 'aseem', 'ashoka ', 'ashwin ', 'bali ', 'baltej', 'bharat', 'bhavesh', 'bhupinder', 'bhushan', 'bibin', 'biju', 'binu', 'byramjee', 'chandrajit', 'dayanidhi', 'deepak', 'devendra', 'devesh', 'dinesh', 'dipankar', 'ekram', 'ganesh ', 'ganpatrao', 'girish', 'girjesh', 'gopinathan', 'govindrao', 'gurcharan', 'gurunath', 'hansraj', 'hara ', 'harish', 'harjit', 'harsh', 'hitesh', 'ira ', 'ishana', 'jagannath ', 'jaipal', 'jalaj', 'jayant ', 'jitendra ', 'kalimuthu', 'karthik', 'karthikeyan', 'kaushal', 'kazi ', 'kishor ', 'kripesh', 'krishnappa', 'krishnayya', 'kulbhushan', 'kumar ', 'lakshan', 'lakshman ', 'mahboob', 'mahendra', 'mandar ', 'manmohan', 'mayank', 'milan ', 'mukesh', 'munish', 'nadeem', 'nagaraj', 'nagesh ', 'nana ', 'naranbhai', 'narayan ', 'naveen', 'neeraj', 'nibaran', 'nihal ', 'nihar', 'nilesh', 'nirav', 'nitesh', 'nitin', 'nripendra', 'oommen', 'palanivel', 'pallav', 'pankaj', 'phani', 'prakash', 'pramod', 'pranab', 'prataprao', 'pratul', 'radhanath', 'rahul', 'raj', 'raja ', 'rajendra ', 'rajinder', 'rajiv', 'rakesh', 'ram ', 'ramakant', 'ramesh', 'ranbir', 'randhir', 'ranganath', 'ratul', 'ravi', 'ravinder', 'ravish', 'rinjish', 'ritwik', 'rohit', 'roman ', 'sachin ', 'sahil ', 'saket', 'samar ', 'samir', 'sandipan', 'sarabjit', 'saravanan', 'satyadev', 'satyajit', 'sekar', 'shahbaz', 'shailendra', 'sharad', 'shekhar', 'shishir', 'shishira', 'shridhar', 'shubhendu', 'sitaramayya', 'smeet ', 'somesh', 'soumitra', 'sourav', 'srikanta', 'srinivas', 'subrata', 'sudhir', 'sudhir Kumar', 'sukhbir', 'sundar', 'sunil', 'surendranath', 'suresh', 'sureza', 'surinder', 'tarsem', 'tarun', 'udit', 'umesh', 'upendra', 'vallathol', 'varghese', 'vasudevan', 'venkataraman', 'venu ', 'vidyut ', 'vikas', 'vinay', 'vinod', 'virat', 'vishva ', 'wasim', 'yash', 'yogesh' ], [ 'Aishwarya', 'Akhila', 'Ambika', 'Ami', 'Amita', 'Amrita', 'Ananya', 'Anjali', 'Ankita', 'Anu', 'Anupama', 'Anushree', 'Apoorva', 'Arpita', 'Arti', 'Arundhati', 'Bipasha', 'Damayanti', 'Deepa', 'Deepali', 'Deepika', 'Deepti', 'Devanshi', 'Dhanishka', 'Eva', 'Gayatri', 'Gita', 'Gitanjali', 'Harshita', 'Heera', 'Hemalata', 'Indira', 'Indrani', 'Indumati', 'Jacqueline', 'Jara', 'Jesminder', 'Juhi', 'Kanika', 'Karthika', 'Karthika', 'Kavita', 'Kirtan', 'Kumudini', 'Lakshanya', 'Lata', 'Latha', 'Latika', 'Lauretta', 'Leela', 'Leelavathi', 'Leila', 'Lena', 'Madhuri', 'Mallika', 'Manjula', 'Manorama', 'Maya', 'Mira', 'Nahla', 'Naila', 'Neha', 'Nehal', 'Niharika', 'Nikita', 'Padmavati', 'Pallavi', 'Parvati', 'Phanita', 'Poonam', 'Poulomi', 'Pratibha', 'Preeti', 'Priya', 'Priyanka', 'Puja', 'Ragini', 'Ramya', 'Rana', 'Rani', 'Rashmi', 'Rati', 'Rekha', 'Richa', 'Ritwika', 'Roopa', 'Saloni', 'Sanah', 'Sandhya', 'Sania', 'Saraswati Devi', 'Satyana', 'Savitri', 'Sharmila', 'Sheela', 'Sheetal', 'Shilpa', 'Shreya', 'Shweta', 'Sneha', 'Sudha', 'Sujata', 'Sulochana', 'Sushma', 'Susmita', 'Swetha', 'Tala', 'Tanisha', 'Tanushree', 'Tejal', 'Tina', 'Uma', 'Varsha', 'Vibha', 'Vijayalakshmi', 'Yamini' ]];
  var DESISURNAMES      = [ 'Sharma', 'Verma', 'Gupta', 'Malhotra', 'Bhatnagar', 'Saxena', 'Kapoor, Kapur', 'Singh', 'Mehra', 'Chopra', 'Sarin', 'Malik', 'Chatterjee', 'Sen', 'Bose', 'Sengupta', 'Das', 'Dasgupta', 'Banerjee', 'Chattopadhyay', 'Mukopadhyay', 'Dutta', 'Nair', 'Pillai', 'Rao', 'Jayaraman', 'Venkatesan', 'Balasubramanium', 'Subramanium', 'Rangan', 'Rangarajan', 'Singh', 'Yadav', 'Jhadav', 'Jaiteley', 'Chauhan', 'Mistry', 'Khan', 'Shah', 'Mehta', 'Patel', 'Patil', 'Pawar', 'Gavde', 'Kadam', 'Tambe', 'Chavan' ];
  var ARABNAMES         = [['abbas', 'abdul', 'abid', 'amir', 'arif', 'aziz', 'bakr', 'bashir', 'falah', 'faisal', 'habib', 'ibrahim', 'ismail', 'ilias', 'kazim', 'muhammad', 'mustafa', 'nadir', 'nasir', 'sahir', 'talib', 'nasim', 'yasir'], [ 'Abeer', 'Abiha', 'Adela', 'Afaf', 'Aisha', 'Aliya', 'Alya', 'Amalia', 'Amina', 'Amira', 'Arwa', 'Ashraqat', 'Asma', 'Atikah', 'Aya', 'Azhar', 'Azra', 'Boutheina', 'Bushra', 'Chaima', 'Cynthia', 'Dalal', 'Dalia', 'Danielle', 'Dina', 'Eliana', 'Esma', 'Eva', 'Farah', 'Farida', 'Fatima', 'Feyrouz', 'Habiba', 'Hafsa', 'Hajra', 'Hala', 'Halima', 'Hamida', 'Hana', 'Hanifa', 'Havva', 'Hawa', 'Hayat', 'Hessa', 'Huda', 'Ibtisam', 'Inaam', 'Jamila', 'Jana', 'Jawahir', 'Jena', 'Jennifer', 'Jessica', 'Joelle', 'Julia', 'Jumana', 'Kareena', 'Karima', 'Katya', 'Khadija', 'Khairunnisa', 'Khawlah', 'Lama', 'Lamia', 'Lana', 'Lara', 'Latifa', 'Layan', 'Leila', 'Lina', 'Lulwa', 'Madiha', 'Maha', 'Mahmuna', 'Mai', 'Malika', 'Maria', 'Marwa', 'Maryam', 'Maya', 'Maya Ali', 'Maysoon', 'Melek', 'Melissa', 'Mila', 'Mira', 'Mirna', 'Mona', 'Munira', 'Nadia', 'Nadine', 'Nafisa', 'Nahla', 'Naila', 'Naima', 'Najat', 'Nalini', 'Nasim', 'Nasrin', 'Natasha', 'Nathalie', 'Nawal', 'Nayla', 'Naziha', 'Nehal', 'Nejla', 'Nermin', 'Nezha', 'Nina', 'Qistina', 'Rabia', 'Rahima', 'Rana', 'Rania', 'Rashida', 'Reem', 'Riffat', 'Rimas', 'Rita', 'Ruqayya', 'Saadia', 'Sabiha', 'Safiya', 'Sahar', 'Saida', 'Saira', 'Sajida', 'Sakhra', 'Sakina', 'Salma', 'Samar', 'Samira', 'Samiya', 'Sandra', 'Sania', 'Sarah', 'Selma', 'Shahd', 'Shakira', 'Shams', 'Shatha', 'Sherine', 'Shumaila', 'Suha', 'Sumaya', 'Tahira', 'Tala', 'Tamara', 'Tanisha', 'Tanya', 'Tara', 'Taslima', 'Tina', 'Tuba', 'Umm Kulthum', 'Wafaa', 'Yamina', 'Yara', 'Yasmin', 'Zahra', 'Zakiya', 'Zaynab', 'Zuhal' ]];
  var BLACKNAMES        = ['DeShawn', 'DeAndre', 'marquis', 'darnell', 'terrell', 'malik', 'trevon', 'tyrone', 'willie', 'dominique', 'demetrius', 'reginald', 'jamal', 'maurice', 'jalen', 'darius', 'xavier', 'terrance', 'andre', 'darryl', 'curtis', 'zeke', 'zack']
  var GERMANNAMES       = [['jan', 'jannik', 'stefan', 'jorg', 'klaus', 'peter', 'günter', 'hans', 'wolfgang', 'heinz', 'herbert', 'karl', 'ernst', 'friedrich', 'wilhelm', 'otto'], [ 'Adele', 'Adelgunde', 'Adelheid', 'Adolfine', 'Agatha', 'Agnes', 'Aische', 'Alexandra', 'Alice', 'Alina', 'Aline', 'Alma', 'Alwina', 'Alwine', 'Amalia', 'Amalie', 'Amanda', 'Amelie', 'Andrea', 'Angela', 'Angelika', 'Angelina', 'Anika', 'Anita', 'Anja', 'Anke', 'Ann-Katrin', 'Anna', 'Anne', 'Annegret', 'Anneli', 'Annelie', 'Anneliese', 'Annemarie', 'Annette', 'Anni', 'Annika', 'Annina', 'Anny', 'Antje', 'Antonia', 'Astrid', 'Augusta', 'Auguste', 'Barbara', 'Bärbel', 'Beate', 'Beatrice', 'Beatrix', 'Bernadette', 'Berta', 'Bertha', 'Bettina', 'Bianca', 'Bianka', 'Birgit', 'Brigitte', 'Britta', 'Brunhild', 'Brünhild', 'Brunhilde', 'Brünhilde', 'Cäcilia', 'Cäcilie', 'Caren', 'Carina', 'Carla', 'Carmen', 'Carola', 'Carolin', 'Caroline', 'Catarina', 'Catharina', 'Cathrin', 'Catrin', 'Cecilia', 'Cecilie', 'Celina', 'Celine', 'Charlotte', 'Chiara', 'Christa', 'Christel', 'Christiane', 'Christina', 'Christine', 'Clara', 'Claudia', 'Constanze', 'Cordula', 'Corina', 'Corinna', 'Cornelia', 'Dagmar', 'Daniela', 'Denise', 'Desirée', 'Désirée', 'Diana', 'Dietlind', 'Dietlinde', 'Dora', 'Doris', 'Dorothea', 'Edda', 'Edith', 'Eike', 'Elena', 'Eleonora', 'Eleonore', 'Elfriede', 'Elisa', 'Elisabeth', 'Elise', 'Elke', 'Ella', 'Ellen', 'Elli', 'Elly', 'Elma', 'Elsa', 'Elsbeth', 'Else', 'Elvira', 'Emelie', 'Emely', 'Emilia', 'Emilie', 'Emily', 'Emma', 'Emmeline', 'Emmi', 'Emmy', 'Erdmute', 'Erica', 'Erika', 'Erna', 'Ester', 'Esther', 'Eugenie', 'Eva', 'Evelyn', 'Fabienne', 'Fanny', 'Felicia', 'Felicitas', 'Felizia', 'Felizitas', 'Finja', 'Finnja', 'Fiona', 'Flora', 'Florentina', 'Florentine', 'Franziska', 'Frauke', 'Freya', 'Frida', 'Fridegunde', 'Frieda', 'Friedegund', 'Friedegunde', 'Friederike', 'Fujiko', 'Gabriela', 'Gabriele', 'Genoveva', 'Gerda', 'Gerlind', 'Gerlinde', 'Gertraud', 'Gertrud', 'Gertrudis', 'Gesine', 'Gina', 'Gisela', 'Grete', 'Gretel', 'Grethe', 'Gudrun', 'Gunda', 'Gundula', 'Hanna', 'Hannah', 'Hanne', 'Hannelore', 'Hedwig', 'Heide', 'Heidemarie', 'Heidi', 'Heike', 'Helena', 'Helene', 'Helga', 'Helge', 'Hella', 'Helmina', 'Helmine', 'Henny', 'Hermina', 'Hermine', 'Herta', 'Hertha', 'Hilda', 'Hilde', 'Hildegard', 'Hulda', 'Ida', 'Ilse', 'Ines', 'Inga', 'Inge', 'Ingeborg', 'Ingeburg', 'Ingrid', 'Irene', 'Irina', 'Iris', 'Irma', 'Irmela', 'Irmelin', 'Irmgard', 'Isabel', 'Isabell', 'Isabella', 'Isabelle', 'Isolde', 'Ivonne', 'Jacqueline', 'Jana', 'Janina', 'Janine', 'Jaqueline', 'Jasmin', 'Jennifer', 'Jessica', 'Johanna', 'Johanne', 'Josefine', 'Josephine', 'Judith', 'Jule', 'Julia', 'Juliane', 'Jutta', 'Kai', 'Karen', 'Karin', 'Karina', 'Karla', 'Karolin', 'Karoline', 'Katarina', 'Käte', 'Katharina', 'Käthe', 'Kathrin', 'Katja', 'Katrin', 'Kerstin', 'Kim', 'Kimiko', 'Kirsten', 'Klara', 'Konstanze', 'Kristin', 'Kristina', 'Kunigunde', 'Lara', 'Larissa', 'Laura', 'Lea', 'Lena', 'Leni', 'Leoni', 'Leonie', 'Leonore', 'Liane', 'Liese', 'Liesel', 'Lieselotte', 'Liesl', 'Lili', 'Lilli', 'Lilly', 'Lina', 'Linda', 'Lisa', 'Liselotte', 'Livia', 'Lore', 'Lotte', 'Louisa', 'Louise', 'Lucia', 'Lucie', 'Luisa', 'Luise', 'Lulu', 'Luna', 'Luzia', 'Luzie', 'Lydia', 'Madeleine', 'Madleen', 'Madlen', 'Madlene', 'Magda', 'Magdalena', 'Magdalene', 'Maike', 'Maja', 'Manuela', 'Mareike', 'Maren', 'Marga', 'Margareta', 'Margarete', 'Margaretha', 'Margarethe', 'Margit', 'Margot', 'Margret', 'Margrit', 'Maria', 'Marianne', 'Marie', 'Marie-Theres', 'Marie-Therese', 'Marina', 'Marion', 'Marleen', 'Marlen', 'Marlene', 'Marlies', 'Marlis', 'Marta', 'Martha', 'Martina', 'Mathilde', 'Maya', 'Mechthild', 'Meike', 'Melanie', 'Melina', 'Melissa', 'Merle', 'Meta', 'Mia', 'Micha', 'Michaela', 'Michelle', 'Minna', 'Miriam', 'Mirjam', 'Mitsuko', 'Mona', 'Monica', 'Monika', 'Nadia', 'Nadin', 'Nadine', 'Nadja', 'Natali', 'Natalie', 'Natascha', 'Nathalie', 'Neele', 'Nele', 'Nicola', 'Nicole', 'Nina', 'Noemi', 'Nora', 'Oda', 'Olga', 'Olivia', 'Ottilie', 'Patricia', 'Patrizia', 'Paula', 'Paulina', 'Pauline', 'Petra', 'Pia', 'Rachel', 'Rafaela', 'Raffaela', 'Rahel', 'Ramona', 'Raphaela', 'Rebecca', 'Rebekka', 'Regina', 'Renate', 'Resi', 'Ricarda', 'Rita', 'Rolanda', 'Ronja', 'Rosa', 'Rose', 'Rosemarie', 'Roswitha', 'Ruth', 'Sabina', 'Sabine', 'Sabrina', 'Samantha', 'Sandra', 'Sara', 'Sarah', 'Saskia', 'Scheherazade', 'Selina', 'Seraphina', 'Seraphine', 'Sibylle', 'Sieglind', 'Sieglinde', 'Siglind', 'Siglinde', 'Sigrid', 'Silke', 'Silvia', 'Simone', 'Sina', 'Sissi', 'Sofia', 'Sofie', 'Sonja', 'Sophia', 'Sophie', 'Stefanie', 'Stella', 'Stephanie', 'Susanna', 'Susanne', 'Svenja', 'Swenja', 'Sybille', 'Sylvia', 'Tabea', 'Tamara', 'Tanja', 'Tatjana', 'Teresa', 'Thekla', 'Theres', 'Theresa', 'Therese', 'Theresia', 'Thirza', 'Tina', 'Tirza', 'Traute', 'Trude', 'Ulrike', 'Ursel', 'Ursula', 'Uta', 'Ute', 'Valentina', 'Valerie', 'Vanessa', 'Vera', 'Verena', 'Verona', 'Veronika', 'Victoria', 'Viktoria', 'Walburg', 'Walburga', 'Waldtraud', 'Waldtraut', 'Walpurga', 'Walpurgis', 'Waltraud', 'Waltraut', 'Wanja', 'Wibke', 'Wiebke', 'Wilhelmina', 'Wilhelmine', 'Wilma', 'Xenia', 'Yasmin', 'Yvonne', 'Zäzilia', 'Zäzilie', 'Zoe' ]];
  var KOREANNAMES       = ['jun', 'jung-hoon', 'sung-ho', 'joon-ho', 'sang-hoon' ];

  // skills and subskills
  // eventually characters will be able to teach these to one another

  // properties of the currently active character
  var name;
  var tagline;
  var nationality;
  var religion;

  // a collection of characters that have been loved by the user
  var tulpas = [];
  function makeTulpa (x, y, name, tagline) {
    var tulpa = {};
    tulpa.position = makePoint (x, y);
    tulpa.memes = [];
    tulpa.skills = [];
    tulpa.tulpas = [];
    tulpa.name = name;
    tulpa.tagline = tagline;
    tulpa.gender = gender;
    tulpa.nationality = nationality;
    tulpa.religion = religion;
    var name = generateName();
    return tulpa;
  }


  function generateTagline() {

    var OBJOP = [ 'into', 'triggered by', 'partial towards', 'likes', 'dislikes', 'does not care for', 'cares for', 'despises', 'fears', 'adores', 'abhors', 'often thinks about', 'rarely considers', 'inspired by', 'suspicious of', 'says "no" to', 'writes about', 'writes poems about', 'dreams about', 'obsessed with', 'cannot cope with', 'placated by', 'soothed by', 'enraged by', 'ignores', 'can\'t ignore', 'meditates on', 'sings about', 'blogs about', 'has a blog about', 'has a tumblr about', 'tweets about', 'posts about', 'studies', 'adores', 'laughs at', 'comfortable with', 'uncomfortable around', 'understands', 'does\'t understand', 'confused by', 'beguiled by', 'makes memes about', 'jokes about', 'won\'t stop talking about', 'yells about', 'raves about', 'offended by', 'chortles at', 'giggles at', 'amused by', 'snorts at', 'sneers at', 'made peace with', 'questions the existence of', 'believes in', 'not afraid of', 'says \'yes\' to', 'ambivalent towards', 'puzzled by', 'has a problem with', 'has no problem with', 'only likes', 'engages with', 'unfazed by', 'smiles at',  'has a theory about', 'theorizes about', 'still on the fence about', 'believes in conspiracy theories about', 'lives for', 'only interested in', 'has views on', 'wrote a manifesto about', 'has a fetish for', 'fetishizes',  'wrote a song about', 'wrote a poem about', 'writes thinkpieces about', 'wrote a thinkpiece about', 'bites his thumb at', 'uneasy around', 'disgusted by', 'attracted to', 'complains about', 'wrote a phd dissertation on', 'wrote a paper on', 'investigates', 'scared of', 'terrified by', 'amazed by', 'shocked by', 'empathizes with', 'dreams about', 'wild about', 'crazy about', 'dreams of a world with more', 'dreams of a world without' ];
    var HUMOP = [ 'friendly towards', 'always at ease around', 'respects', 'looks up to', 'defender of', 'looks down on', 'pities', 'writes fan fiction about', 'worships', 'reveres', 'mocks', 'spits at', 'lost his faith in', 'still believes in', 'speaks on behalf of', 'can always count on', 'conspires against', 'can\'t resist', 'thirsts for', 'can\'t resist smiling at', 'stands up for', 'stands up to', 'prefers the company of', 'idolizes', 'disrespects', 'fawns over', 'talks to', 'whispers to', 'shrieks at', 'screams at', 'yells at', 'faps to', 'keeps a tab on', 'talks at' ];
    var DOES = [ 'writes', 'thinks', 'dreams', 'tweets', 'blogs', 'ponders', 'brags', 'yaps', 'often talks', 'ruminates' ];
    var BEAST = [ 'hamster', 'cow', 'chicken', 'chinchilla', 'tarsier', 'hippo', 'pup', 'lizard', 'crab', 'falcon', 'worm', 'snake', 'shark', 'whale', 'dolphin', 'bull', 'horse', 'owl', 'pug', 'shiba inu', 'samoyed', 'corgi', 'cat', 'bear', 'sloth', 'spider', 'llama', 'alpaca', 'goat', 'babboon', 'macaque', 'frog', 'capybara', 'hedgehog', 'sugar glider', 'skunk', 'serval', 'kangaroo', 'armadillo', 'possum', 'wombat', 'badger', 'squirrel', 'bat', 'ram', 'rabbit', 'hare', 'chihuahua', 'horse', 'ant', 'camel', 'ferret', 'mink', 'gorilla', 'egret', 'rooster', 'rat', 'leopard', 'tiger', 'panther', 'lion', 'liger', 'bobcat', 'hound', 'dog', 'cat', 'elephant', 'rhino', 'orangutan', 'tapir', 'panda', 'koala', 'lemur', 'parrot', 'dove', 'crow', 'turtle', 'eel', 'beaver', 'porcupine', 'pig', 'falcon', 'shrimp', 'lobster', 'squid', 'duck', 'bird', 'kitten', 'marmoset', 'grouse', 'gerbil', 'lemming', 'gopher', 'porcupine', 'flying squirrel' ];
    var PLURAL = [ 'cats', 'dogs', 'sheep', 'spheres', 'trees', 'rocks', 'trains' , 'hats', 'shoes', 'bread', 'cushions', 'pokemon', 'cattle', 'memes', 'rhymes', 'monkeys', 'marmosets', 'tarsiers', 'books', 'stds', 'd&d rulebooks', 'miniatures', 'gods', 'demons', 'angels', 'math textbooks', 'ears', 'feet', 'hands', 'nose hairs', 'spells', 'pebbles', 'memorabilia', 'stamps', 'faberge eggs', 'peaches', 'emoji', 'anime', 'newts', 'waves', 'tunes', 'chiptunes', 'stories', 'logs', 'atoms', 'particles', 'potions', 'scars', 'wheels', 'cogs', 'pipes', 'manifestos', 'archons', 'hamsters', 'birds', 'elders', 'voters', 'platonic forms', 'dreams', 'visions', 'hallucinations', 'strategies', 'pugs', 'pogs', 'words', 'numbers', 'chords', 'violins', 'video games', 'runes', 'cyphers', 'riddles', 'stickers', 'thinkpieces', 'hot takes', 'whips', 'narcotics', 'gondolas', 'pepes', 'tights', 'butts', 'thighs', 'bulges', 'mandolins', 'guitars', 'harmonicas', 'balalaikas', 'roman coins', 'pokemon cards', 'magic cards', 'tarot cards', 'data', 'asuras', 'devas', 'owls', 'screenplays', 'diet tips', 'chaos emeralds', 'tulpas', 'glyphs', 'bees', 'ants', 'BEASTs', 'guns', 'swords' ];
    var ADJECTIVE = [ 'cool', 'trendy', 'friendly', 'benevolent', 'understanding', 'clever', 'rude', 'friendly', 'paranoid', 'anxious', 'neurotic', 'disgusting', 'abhorent', 'timid', 'lazy', 'autistic', 'irreverent', 'irritable', 'depressed', 'sad', 'emotional', 'nihilistic', 'hedonistic', 'vulgar', 'ironic', 'unironic', 'postironic', 'violent', 'anhedonic', 'promiscuous', 'cunning', 'bashful', 'prudish', 'well-dressed', 'soft-spoken', 'audacious', 'unruly', 'orderly', 'clean', 'respectful', 'clueless', 'dirty', 'shrewd', 'shrill', 'loud', 'demented', 'misunderstood', 'deranged', 'deluded', 'fiery', 'sincere', 'sensitive', 'horny', 'broke', 'wise', 'educated', 'uneducated', 'wishful', 'cautious', 'obsessive', 'anonymous', 'famous', 'unapologetic', 'shameless', 'beautiful', 'handsome', 'glamorous', 'foxy', 'comely', 'cute', 'graceful','gorgeous', 'ravishing','noble', 'hideous', 'reclusive', 'reptilian', 'revolting', 'monstrous', 'belligerent', 'peaceful', 'combative', 'pretentious', 'flamboyant', 'sophomoric', 'patrician', 'masculine', 'feminine', 'alpha', 'beta', 'TRAITLY TRAITADJ', 'worried', 'naive', 'ignorant', 'woke', 'swole', 'generous', 'real', 'powerful', 'mighty', 'queer', 'pansexual', 'polyamorous', 'fatuous', 'gay', 'lovely', 'nice', 'corrupt', 'unhappy', 'evil', 'hideous', 'hateful', 'unpleasant', 'heinous', 'nefarious', 'ugly', 'vile', 'vicious', 'wicked', 'offensive', 'beastly', 'obscene', 'repulsive', 'repugnant', 'pernicious', 'spiteful', 'wrathful', 'pompous', 'dumb', 'bombastic', 'boastful', 'presumptuous', 'pretentious', 'selfish', 'stuck-up', 'vain', 'thoughtful', 'affectionate', 'amiable', 'charitable', 'gentle', 'loving', 'tolerant', 'trusting', 'altruistic', 'mild', 'bitter', 'cruel', 'mean', 'silly', 'crazy', 'mad', 'idiotic', 'childish', 'simple', 'ignorant', 'immature', 'intelligent', 'stupid', 'sophomoric', 'spoiled', 'crazed', 'fat', 'obese', 'skinny', 'athletic', 'lean', 'muscular', 'beefy', 'thick', 'large', 'small', 'unique', 'mute', 'foolish', 'wily', 'charismatic', 'lewd', 'kinky', 'dashing', 'monstrous', 'gluttonous', 'youthful', 'young', 'retarded', 'creepy', 'uncivilized', 'barbaric', 'savage', 'sadistic', 'masochistic', 'feeble' ];
    var PERSON = [ 'person', 'bloke', 'chap', 'lad', 'bro', 'fellow', 'fella', 'character', 'individual', 'citizen', 'boy', 'man', 'person', 'guy', 'soul', 'being', 'beast', 'creature', 'autist', 'madman', 'manchild', 'incel', 'volcel', 'solipsist', 'communist', 'anarchist', 'redditor', 'furry', 'larper', 'feminist', 'paleofeminist', 'male feminist', 'ally', 'white knight', 'prophet', 'otaku', 'singularian', 'apprentice', 'seer', 'bolshevik', 'nihilist', 'ally', 'addict', 'autocrat', 'racist', 'narcissist', 'masochist', 'sadist', 'librarian', 'fan', 'lolcow', 'hipster', 'normie', 'sophist', 'contrarian', 'goon', 'btard', 'poser', 'cat', 'bastard', 'gent', 'gentleman', 'mortal', 'male', 'adult', 'pessimist', 'optimist', 'sjw', 'fetishist', 'nympho', 'nomad', 'psychonaut', 'DRUGhead', 'DRUG user', 'subgenius', 'robot', 'fashionista', 'prole', 'pleb', 'raver', 'goth', 'hobo', 'DRUG addict', 'DRUGhead', 'apologist', 'fuckboy', 'fool', 'paypig', 'idiot', 'buffoon', 'freak', 'weirdo', 'creep', 'muscle builder', 'VICE addict', 'slut', 'bitch' ];
    var WOMAN = [ 'girl', 'gal', 'lady', 'lass', 'dame', 'princess', 'bitch', 'female', 'woman', 'femme', 'dyke', 'babe', 'broad', 'chick', 'harlot', 'soul', 'individual', 'harpy', 'creature' ];
    var DRUG = [ 'pot', 'meth', 'crack', 'coke', 'smack', 'skooma', 'tren', 'adderall', 'zoloft', 'prozac', 'depakote', 'mdma', 'acid' ];
    var OCCUPATION = [ 'engineer', 'troll', 'neet', 'designer', 'magician', 'mathematician', 'researcher', 'ironist', 'author', 'shitposter', 'scientist', 'astrologist', 'alchemist', 'sage', 'bard', 'shaman', 'druid', 'philosopher', 'rapper', 'spy', 'prostitute', 'sex worker', 'poet', 'retiree', 'software developer', 'barista', 'marine', 'cop', 'wizard', 'makeup artist', 'artist', 'janitor', 'guitarist', 'journalist', 'blogger', 'camwhore', 'thief', 'DRUG dealer', 'grifter', 'truck driver', 'mercenary', 'doctor', 'mechanic', 'translator', 'florist', 'thought leader', 'consultant', 'ux designer', 'digital nomad', 'professor', 'dj', 'hacker', 'clown', 'politician', 'lawyer', 'product manager', 'haberdasher', 'soprano', 'educator', 'pedagogue', 'technocrat', 'startup founder', 'vp of PLURAL', 'director of PLURAL', 'master of PLURAL', 'necromancer', 'priest', 'druid', 'monk', 'occultist', 'blogger', 'vlogger', 'seasteader', 'venture capitalist', 'GAME player', 'playwright', 'linguist', 'pornstar', 'escort', 'falconer', 'intellectual', 'activist', 'BEAST breeder', 'BEAST tender', 'BEAST collector', 'BEAST trainer', 'BEAST tamer', 'BEAST wrangler', 'BEAST wrangler', 'breeder of BEASTs', 'sampler of DRUG', 'sampler of drugs', 'proprietor of PLURAL', 'proprietor of BEASTs', 'emasculator', 'drowner', 'pauper', 'BEAST catcher', 'BEAST walker', 'examiner of PLURAL', 'proprietor of PLURAL', 'purveyor of PLURAL', 'BEAST tipper', 'BEAST shaver', 'BEAST hunter', 'purveyor of BEAST skins', 'purveyor of FABRIC', 'purveyor of FABRIC SHIRTs', 'purveyor of GEM encrusted FABRIC SHIRTs', 'BEAST feeder', 'examiner of BEASTs', 'BEAST whisperer', 'inspector of PLURAL', 'bodybuilder', 'weightlifter' ];
    var PREFIX = [ 'hyper', 'uber', 'meta', 'paleo', 'anarcho', 'xeno', 'post', 'anti', 'nu-', 'geo', 'neo', 'reconstructionist ', 'liberal ', 'conservative ', 'ultra', 'eco', 'crypto', 'reactionary ', 'revisionist ', 'queer ', 'radical ', 'moderate ', 'cyber', 'intersectionalist ', 'esoteric ' ];
    var IDEOLOGY = [ 'communist', 'capitalist', 'feminist', 'maoist', 'stalinist', 'primitivist', 'syndicalist', 'collectivist', 'egoist', 'platonist', 'realist', 'syndicalist','rationalist', 'modernist', 'singularian', 'fascist', 'natalist', 'naturist', 'democrat', 'conservative', 'liberal', 'nationalist', 'agrarian', 'federalist', 'isolationist', 'monarchist', 'libertarian', 'environmentalist', 'meninist', 'masculinist', 'progressivist', 'republican', 'socialist', 'islamist', 'zionist', 'radicalist', 'baathist', 'nasserist', 'arabist', 'jihadist', 'voluntarist', 'nazi', 'marxist' ];
    var CELEBRITY = [ 'zizek', 'dawkins', 'marx', 'trotsky', 'mao', 'cher', 'beyonce', 'kanye', 'kim kardashian', 'dril', 'stirner', 'nietzsche', 'plato', 'spinoza', 'kant', 'hegel', 'obama', 'trump', 'kissinger', 'putin', 'harambe', 'trudeau', 'stalin', 'lenin', 'kurzweil', 'peter thiel', 'eliezer yudkowsky', 'dhh', 'steve jobs', 'richard stallman', 'herzl', 'arafat', 'hillary', 'oprah', 'bjork', 'david bowie', 'kierkegaard', 'murakami', 'manson', 'kaczynski', 'foucault', 'goethe', 'derrida', 'adam sandler', 'bill cosby', 'bernie sanders', 'ron paul', 'pkd', 'weev', 'milo yiannopoulos', 'malcolm x', 'mlk', 'missy elliot', 'tom waits', 'jimmy carter', 'lady gaga', 'michael jackson', 'tupac', 'eminem', 'prince', 'snoop dogg', 'lil wayne', 'kendrick lamar', 'nas', 'rumi', 'maharishi', 'madonna', 'elvis', 'grr martin', 'david lynch', 'alan moore', 'martin scorsese', 'christopher nolan', 'tim burton', 'george lucas', 'hitler', 'stalin', 'mao zedong', 'kim jong il', 'kim jong un', 'donald trump', 'bill clinton', 'saddam hussein', 'gaddafi', 'bashar al assad', 'netanyahu', 'chelsea clinton', 'modi', 'queen elizabeth', 'michael jackson', 'lil kim', 'nicki minaj', 'iggy azalea', 'sadat', 'nasser', 'nassim taleb', 'bill nye', 'neil degrasse tyson', 'jordan peterson', 'emmanuel macron', 'marine le pen', 'chelsea clinton', 'mark zuckerberg' ];
    var VERY = [ 'very', 'fiercely', 'zealously', 'rather', 'singularly', 'distinctly', 'relatively', 'darn', 'mighty', 'devilishly', 'remarkably', 'highly', 'vaguely', 'faintly' ];
    var WRT = [ 'when it comes to', 'with regard to', 'around' ];
    var FAN = [ 'fan', 'fanboy', 'worshipper', 'admirer', 'acolyte' ];
    var PEOPLE = [ 'fascists', 'communists', 'redditors', 'sjws', 'anarchists', 'incels', 'volcels', 'pokemon hunters', 'larpers', 'cosplayers', 'DEGREE students', 'furries', 'men', 'women', 'druids', 'magi', 'thieves', 'rascals', 'trolls', 'autists', 'feminists', 'shitposters', 'twitter users', 'thots', 'tinder users', 'redditors', 'btards', 'progs', 'crowds', 'DRUG users', 'DRUG addicts', 'politicians', 'mansplainers', 'manspreaders', 'friends', 'ghosts', 'ghouls', 'skeletons', 'spooks', 'bros', 'dudebros', 'fuckboys', 'fashionistas', 'wizards', 'witches', 'warlocks', 'magicians', 'sorcerers', 'barbarians', 'sex workers', 'prostitutes', 'camwhores', 'lolcows', 'maidens', 'dames', 'qts', 'monstergirls', 'hippies', 'sluts', 'crossfit enthusiasts', 'HUMANS', 'MILLNESS HUMANS', 'antifas', 'ganguro girls', 'gyarus', 'MUSIC listeners', 'MUSIC fans', 'truthers', 'flat-earthers', 'breakdancers', 'rappers', 'strippers', 'male strippers', 'escorts', 'beatniks', 'hentei artists' ];
    var COMMON = [ 'your average', 'a common', 'just an ordinary', 'an ordinary', 'a garden variety', 'a retired', 'a burnt-out', 'a washed-out', 'your friendly neighborhood', 'not that kind of' ]
    var FRAME = [ 'always blogs about the time he', 'always tweets about how he', 'keeps talking about the time he', 'fondly remembers the time he', 'can\'t forget the time he', 'hasn\'t been the same since he', 'changed when he', 'forgets that he', 'blocked out the time that he', 'denies that he', 'proud that he', 'ashamed that he', 'not ashamed that he' ];
    var STORY = [ 'befriended', 'fought', 'punched', 'made love to', 'kissed', 'yelled at', 'was seduced by', 'was fooled by', 'was tricked into dating', 'dated', 'slapped', 'encountered', 'spoke to', 'was yelled at by', 'was lectured by', 'was educated by', 'had a heart-to-heart with', 'married', 'dated', 'divorced', 'broke up with', 'ran away from', 'ignored', 'loved', 'had a crush on', 'teamed up with', 'worked with', 'played with', 'talked to', 'laughted at', 'dreamed about', 'larped with', 'ran with', 'converted', 'won over', 'was won over by', 'made a deal with', 'slept with', 'rejected', 'interviewed', 'played GAME with', 'gaslighted', 'was gaslighted by', 'fucked', 'was fucked by', 'seduced', 'was seduced by', 'flirted with', 'winked at', 'barked at' ];
    var TRAITADJ = [ 'challenged', 'gifted', 'inclined', 'driven', 'advanced', 'stunted', 'flexible', 'rigid', 'liberal', 'conservative', 'retarded', 'disabled'];
    var TRAITLY = [ 'existentially', 'physically', 'mentally', 'linguistically', 'psychically', 'emotionally', 'spiritually', 'sexually', 'artistically', 'musically', 'mathematically', 'epistemically', 'ideologically', 'socially' ];
    var XLY = [ 'gently', 'anxiously', 'ironically', 'unironically', 'exclusively', 'angrily', 'calmly', 'peacefully', 'expertly', 'ineptly', 'competently', 'incompetently', 'lazily', 'begrudgingly', 'professionally', 'religiously', 'occasionally', 'competitively', 'aggressively', 'autistically', 'maniacally', 'enthusiastically', 'cheerfully', 'rudely', 'courageously', 'valiantly', 'heroically', 'stupidly', 'clumsily' ];
    var WORK = [ 'works', 'plays', 'XLY hangs out', 'hangs out', 'meets NATIONALITY PEOPLE', 'trolls NATIONALITY PEOPLE', 'flirts with NATIONALITY PEOPLE', 'bullies NATIONALITY PEOPLE','meets PEOPLE', 'trolls PEOPLE', 'flirts with PEOPLE', 'bullies PEOPLE', 'chills', 'is only truly himself', 'writes songs about life', 'blogs about life', 'tweets about life', 'lives' ];
    var PLACE = [ 'online', 'in world of warcraft', 'on twitter', 'on facebook', 'in starbucks', 'in the basement', 'at the gym', 'on the street', 'on myspace', 'on google plus', 'on reddit', 'in second life', 'in furcadia', 'on somethingawful' ];
    var CLONE = [ 'a clone of', 'a ghola of', 'a painting of', 'a hologram of', 'a simulation of', 'a strawman of', 'a puppet modelled after', 'a guy dressed up as' ];
    var FABRIC = [ 'wool', 'cotton', 'silk', 'sheer silk', 'merino wool', 'leather', 'pleather', 'latex', 'rubber', 'spandex', 'BEAST hide', 'BEAST skin', 'fur', 'denim', 'gore-tex', 'lace', 'burlap', 'canvas', 'cashmere', 'chino', 'chiffon', 'felt', 'fishnet', 'flannel', 'satin', 'mesh' ];
    var GAME = [ 'pokemon', 'super mario', 'mortal kombat', 'zelda', 'sim city', 'minecraft', 'civ3', 'dota', 'league', 'starcraft', 'diablo', 'ddr', 'quake', 'tic-tac-toe', 'd&d', 'undertale', 'portal', 'overwatch', 'warcraft', 'everquest', 'street fighter', 'contra', 'donkey kong', 'pong', 'halo', 'counter-strike', 'red alert', 'joust', 'dota', 'basketball', 'football', 'baseball', 'pinball', 'hockey', 'badminton', 'tennis', 'squash', 'bowling', 'bocce', 'petanque', 'volleyball', 'foozeball', 'ball', 'golf', 'polo', 'water polo', 'calvinball', 'beer pong', 'poker', 'durak', 'go fish', 'go', 'chess', 'checkers', 'monopoly', 'cards against humanity', 'mahjong', 'tekken', 'metal slug', 'golden axe', 'farmville', 'candy crush' ];
    var SHIRT = [ 'shirt', 'vest', 'cape', 'onesie', 'leotard', 'coat', 'cloak', 'tuxedo', 'jacket', 'frock', 'robe', 'polo', 'onesie', 'tunic', 'cardigan', 'suit', 'pantsuit', 'poncho', 'mask', 'robe', 'vest', 'apron' ];
    var FOOD = [ 'FRUIT', 'FRUIT cake', 'FRUIT pie', 'deep fried BEAST', 'deep fried BEAST brains', 'deep fried BEAST hearts', 'roast BEAST with FRUIT sauce', 'braised BEAST', 'FRUIT pie', 'FRUIT salad', 'meat', 'liver', 'BEAST liver', 'BEAST meat', 'raw BEAST', 'BEAST stir fry', 'fermented BEAST meat', 'cured BEAST meat', 'lasagna', 'pizza', 'rice', 'beans', 'chickpeas', 'hummus', 'taihini', 'pickles', 'shawarma', 'falafel', 'shakshuka', 'poutine', 'cheesecake', 'cheesesteaks', 'burgers', 'fries', 'sushi', 'soba', 'udon', 'ramen', 'oatmeal', 'gruel', 'oats', 'cereal', 'cornflakes', 'soup', 'quinoa', 'buckwheat', 'rye', 'borscht', 'tapas', 'steak', 'caviar', 'mac and cheese', 'chorizo', 'tacos', 'BEAST meat tacos', 'BEAST meat burritos', 'burritos', 'churros', 'doughnuts', 'pasta', 'paella', 'beef patties', 'cheese', 'mozzarella', 'spice', 'nachos', 'dumplings', 'wontons', 'chicken soup', 'pho', 'eel', 'chicken', 'beef', 'mutton', 'roast BEAST', 'BEAST jerky', 'minced BEAST', 'fried BEAST', 'minced BEAST dumplings', 'BEAST sausage', 'BEAST burgers', 'BEAST soup', 'BEAST stew', 'BEAST patties', 'BEAST skewers', 'pudding', 'kfc', 'chicken tendies' ];
    var GENRE = [ 'folk', 'rock', 'blues', 'jazz', 'rap', 'country', 'punk', 'funk', 'chiptunes' ];
    var MUSIC = [ 'GENRE', 'PREFIXGENRE', 'acid GENRE', 'synth GENRE', 'RELIGION GENRE' ];
    var HUMANS = [ 'women', 'girls', 'ladies', 'females', 'dames', 'chicks', 'babes', 'men', 'dudes', 'boys', 'lads', 'guys', 'hotties', 'bimbos', 'sluts', 'cholas', 'gals'];
    var FIELD = [ 'archeology', 'anthropology', 'psychology', 'physics', 'chemistry', 'engineering', 'mathematics', 'literature', 'poetry', 'astrology', 'history', 'linguistics', 'law', 'geography', 'economics', 'ecology', 'oceanography', 'geology', 'biology', 'zoology', 'botany', 'logic', 'statistics' ];
    var DATESITE = ['okcupid', 'tinder', 'pof', 'eharmony', 'lavalife', 'jdate', 'match dot com', 'badoo', 'fetlife' ];
    var DEGREE = [ 'FIELD', 'marxist FIELD', 'feminist FIELD', 'queer FIELD', 'organic FIELD', 'cyberFIELD', 'NATIONALITY FIELD', 'RELIGION FIELD', 'RELIGION ethics', 'RELIGION epistemology', 'RELIGION mythology', 'RELIGION history', 'RELIGION metaphysics', 'RELIGION theology', 'RELIGION logic' ];
    var ACTIVITY = [ 'pop pimples', 'eat FOOD', 'read NATIONALITY lit', 'read NATIONALITY literature', 'read NATIONALITY propaganda', 'read NATIONALITY poetry', 'read RELIGION scripture', 'listen to RELIGION hymns', 'listen to NATIONALITY MUSIC', 'wear FABRIC SHIRTs', 'wear jewel encrusted FABRIC SHIRTs', 'sail', 'larp', 'cosplay', 'skate', 'ski', 'rollerblade', 'fish', 'gamble', 'flirt', 'fuck', 'pick up HUMANS', 'date HUMANS', 'date NATIONALITY HUMANS', 'fuck NATIONALITY HUMANS', 'date RELIGION HUMANS', 'fuck NATIONALITY HUMANS', 'flirt with NATIONALITY HUMANS', 'flirt with RELIGION HUMANS', 'think about PHENOMENON', 'netflix and chill', 'masturbate', 'meditate', 'tell jokes', 'laugh', 'dance with BODY HUMANS', 'dance', 'sing', 'travel', 'collect stamps', 'pet BEASTs', 'be around PEOPLE', 'be around BEASTs', 'explain PHENOMENON', 'tie up BODY PEOPLE', 'tickle BODY PEOPLE' ];
    var MILLNESS = [ 'bipolar', 'schizo', 'depressive', 'autistic', 'aspie', 'ocd', 'alcoholic', 'bulimic', 'dyslexic', 'masochist', 'sadist' ];
    var ITEM = [ 'GEM BEAST', 'FABRIC bound journal', 'FABRIC bound RELIGION holy book', 'FABRIC bound spellbook', 'SHIRT', 'GEM encrusted SHIRT', 'GEM necklace', 'GEM bracelet', 'GEM pin in the shape of a BEAST', 'GEM snuff bottle adorned with BEASTs', 'BEAST sculpture', 'carved GEM', 'unpolished piece of GEM', 'GEM encrusted idol', 'GEM tooth', 'GEM ring', 'GEM earring', 'IDEOLOGY manifesto', 'RELIGION IDEOLOGY manifesto', 'notebook', 'pen', 'pencil', 'FABRIC wallet', 'FABRIC hat', 'FABRIC glove', 'FABRIC mask', 'FABRIC slipper', 'FABRIC sash', 'FABRIC belt', 'GEM medallion', 'NATIONALITY cookbook', 'NATIONALITY flag', 'NATIONALITY costume', 'FABRIC strap', 'painting of CELEBRITY', 'locket with a picture of CELEBRITY', 'sketch of CELEBRITY', 'GEM encrusted crown', 'GEM encrusted MATERIAL VESSEL', 'MATERIAL INSTRUMENT' ];
    var GEM = [ 'jade', 'ruby', 'diamond', 'sapphire', 'pearl', 'amethyst', 'malachite', 'sapphire', 'garnet', 'red jade', 'onyx', 'crystal', 'emerald', 'chalk', 'opal', 'garnet', 'plastic', 'topaz', 'bone', 'ivory', 'ebony' ];
    var BOSS = [ 'oligarch', 'merchant', 'gangster', 'celebrity', 'politician', 'diplomat', 'ambassador', 'professor', 'admiral', 'general', 'priest', 'ROYALTY' ];
    var ROYALTY = [ 'prince', 'king', 'duke', 'queen', 'duchess', 'baron', 'baroness', 'princess', 'priest', 'earl', 'admiral', 'emperor', 'count', 'knight', 'hero', 'general', 'poet', 'scribe', 'courtier', 'mystic', 'lord' ];
    var FRUIT = [ 'tomato', 'orange', 'carrot', 'apple', 'pear', 'peach', 'grape', 'apricot', 'plum', 'kiwi', 'dragonfruit', 'tamarind', 'pineapple', 'watermelon' ];
    var BOOZE = [ 'vodka', 'scotch', 'whiskey', 'bourbon', 'gin', 'wine', 'red wine', 'white whine', 'merlot', 'cabernet sauvignon', 'pinot noir', 'sauvignon blanc', 'chardonnay', 'cognac', 'brandy', 'liqueur', 'rye whiskey', 'vermouth', 'absinthe', 'beer', 'cider', 'rice wine', 'soju', 'sake', 'tequila' ];
    var DRINK = [ 'coffee', 'tea', 'black tea', 'oolong tea', 'green tea', 'bubble tea', 'jasmine tea', 'pu erh tea', 'hibiscus tea', 'chamomile tea', 'pepsi', 'sprite', 'root beer', 'soda', 'club soda', 'FRUIT juice', 'BOOZE', 'matcha', 'yerba mate', 'hot chocolate', 'red bull', 'milk', 'soy milk', 'almond milk', 'rice milk', 'yak milk', 'goat milk', 'red wine', 'white wine', 'rice wine', 'jim beam', 'moonshine', 'jagermeister', 'goldschlager', 'beer', 'heineken', 'bud light', 'guinness', 'ale', 'ginger ale', 'dr pepper', 'soda', 'BEAST blood' ];
    var VESSEL = [ 'teapot', 'mug', 'cup', 'pitcher', 'jug', 'gaiwan', 'bowl', 'beaker', 'pot', 'bottle', 'flask', 'goblet', 'tankard' ];
    var MATERIAL = [ 'wooden', 'golden', 'ebony', 'silver', 'brass', 'clay', 'pewter', 'tin', 'copper', 'ivory', 'aluminum', 'glass', 'crystal', 'platinum' ];
    var TEMPERATURE = [ 'cold', 'hot', 'warm', 'lukewarm', 'iced', 'chilled', 'piping hot', 'room temperature', 'tepid' ];
    var INSTRUMENT = [ 'guitar', 'balalaika', 'violin', 'viola', 'cello', 'ocarina', 'trumpet', 'saxophone', 'lute', 'kazoo', 'harmonica', 'penny whistle', 'tin whistle', 'harp', 'piano', 'keyboard', 'accordion', 'bagpipes', 'clarinet', 'flute', 'recorder', 'xylophone', 'trombone', 'synth', 'cajon', 'mandolin', 'bassoon', 'tuba', 'theremin', 'didgeridoo', 'banjo', 'tambourine', 'bongos', 'harpsichord', 'sitar', 'lyre', 'melodica', 'oud', 'maracas', 'ocarina' ];
    var ACCENT = [ 'thick', 'mild', 'heavy', 'annoying', 'dumb', 'sexy', 'seductive', 'charming', 'retarded', 'barely noticeable', 'shrill' ];
    var PROF = [ 'professional', 'amateur', 'full-time', 'part-time', 'tenured', 'unionized', 'licensed', 'unlicensed', 'unemployed' ];
    var BODY = [ 'skinny', 'chubby', 'fat', 'obese', 'overweight', 'fit', 'muscular', 'thick', 'athletic', 'skinny', 'statuesque', 'tall', 'short', 'curvy', 'voluptuous', 'attractive', 'ugly', 'sexy', 'hideous', 'beautiful', 'sensual', 'hot', 'beefy', 'muscular' ];
    var PROPERTY = [ 'audacity', 'boldness', 'arrogance', 'insolence', 'prudence', 'impertinence', 'brashness', 'beauty', 'fairness', 'ugliness', 'gaiety', 'hideousness', 'charm', 'grotesqueness', 'pomp', 'pretentiousness', 'inadequacy', 'glamor', 'notoriety', 'freedom', 'ingenuity', 'resourcefulness', 'appetite', 'modesty', 'meekness' ];
    var FAMED = [ 'known', 'feared', 'mocked', 'loved', 'accepted', 'shunned', 'scolded', 'beaten', 'chastised', 'excommunicated', 'praised', 'lauded', 'worshiped', 'celebrated', 'exalted', 'applauded', 'beaten' ];
    var VICE = [ 'having sex', 'playing videogames', 'shitposting', 'trolling', 'sincerity', 'irony', 'podcasting', 'using twitter', 'drinking alcohol', 'smoking weed', 'abstract mathematics', 'functional programming', 'rationality', 'postrationality', 'insight porn', 'vanilla porn', 'doujin', 'bathing', 'masturbation', 'being a normie' ];
    var PHENOMENON = ['lightning', 'clouds', 'the aurora borealis', 'gravity', 'electromagnetism', 'the weak nuclear force', 'the strong nuclear force', 'society', 'culture', 'death', 'life', 'birth', 'conception', 'contraception', 'disease', 'change', 'stasis', 'continental drift', 'evolution', 'rotation', 'motion', 'light', 'darkness', 'heat', 'temperature', 'frost', 'snow', 'ice', 'tension', 'friction', 'growth', 'cognition' ];
    var TATLOC = [ 'chest', 'back', 'shoulder', 'thigh', 'ass', 'bicep' ];
    var TATTOO = [ 'has a tattoo of CELEBRITY on his TATLOC', 'has CELEBRITY tattood on his TATLOC', 'has a tattoo of a BEAST on his TATLOC', 'has a tattoo of a BEAST playing the INSTRUMENT on his TATLOC', 'has a tattoo of CELEBRITY playing the INSTRUMENT on his TATLOC', 'has a CELEBRITY calaca tattooed on his TATLOC', 'has a chibi CELEBRITY tattooed on his TATLOC', 'has a ADJECTIVE BEAST tattooed on his TATLOC', 'FAMED for his CELEBRITY tattoo' ];
    var SKILL  = [ 'cooking', 'baking', 'painting', 'programming', 'writing', 'weaving', 'singing', 'playing the INSTRUMENT', 'GAME', 'drawing', 'shitposting', 'blogging', 'tweeting', 'sewing', 'talking to PEOPLE', 'dancing', 'hacking', 'bodybuilding', 'ux design', 'trolling', 'game design', 'photoshop', 'illustrator', 'working out', 'BEAST taming', 'BEAST tending', 'BEAST breeding' ];
    var LEVEL  = [ 'knows nothing about', 'knows about', 'familiar with', 'tried his hand at', 'sucks at', 'adequate at', 'competent at', 'good at', 'expert at', 'master of', 'grandmaster of' ];

    
    //[ 'owns a ITEM', 'has a ITEM', 'bought a ITEM', 'desires a ITEM', 'stole a ITEM', 'stole a ITEM from a NATIONALITY', 'stole a ITEM from a NATIONALITY BOSS', 'stole a ITEM from a BOSS','stole a ITEM from a ADJECTIVE BOSS', 'bought a ITEM from a NATIONALITY'],

    var forms = [ 
      [ 'plays the INSTRUMENT', 'serenades HUMANS with the INSTRUMENT', 'serenades his DATESITE dates with the INSTRUMENT', 'plays the INSTRUMENT for his DATESITE dates', 'plays the INSTRUMENT for PEOPLE', 'plays the INSTRUMENT for his pet BEAST', 'XLY plays the INSTRUMENT', 'plays the ' + nationality + ' national anthem on the INSTRUMENT' ],
      [ 'cooks BEASTs for PEOPLE', 'cooks BEASTs for NATIONALITY PEOPLE', 'has a BODY BEAST fursona', 'experiments on BEASTs', 'administers DRUG to BEASTs', 'his ADJECTIVE pet BEAST is his only friend', 'more BEAST than ' + ( gender === 'male' ? 'man' : 'woman' ), 'looks like a ADJECTIVE BEAST', 'looks like a BEAST', 'looks like a BODY BEAST', 'a BEAST in bed', 'a BEAST in the sack', 'walks like a BEAST', 'walks like a BODY BEAST', '"the ' + nationality + ' BEAST"', 'survived a BEAST attack', 'a BEAST in a past life' ],
      [ 'XLY eats FOOD', 'loves FOOD and DRINK', 'XLY guzzles FOOD', 'drinks DRINK', 'sips DRINK', 'drinks nothing but DRINK', 'drinks nothing but TEMPERATURE DRINK', 'XLY drinks DRINK', 'XLY sips DRINK', 'drinks DRINK from a MATERIAL VESSEL', 'sips DRINK from a MATERIAL VESSEL', 'eats FOOD with PEOPLE', 'feeds FOOD to PEOPLE', 'feeds FOOD to BEASTs', 'feeds FOOD to his pet BEAST', 'cooks FOOD for PEOPLE', 'only eats ' + nationality + ' food' ],
      [ 'reads NATIONALITY lit', 'XLY reads NATIONALITY lit', 'watches NATIONALITY films', 'listens to NATIONALITY MUSIC', 'recites ' + (nationality === 'american' ? 'NATIONALITY' : nationality) + ' poetry to BODY PEOPLE', 'recites NATIONALITY poetry to ADJECTIVE HUMANS', 'recites NATIONALITY poetry to BODY HUMANS'],
      [ 'meets HUMANS on DATESITE', 'meets BODY HUMANS on DATESITE', 'meets NATIONALITY HUMANS on DATESITE', 'meets BODY NATIONALITY HUMANS on DATESITE', 'treats DATESITE dates to FOOD', 'meets RELIGION HUMANS on DATESITE' ],
      [ 'STORY CLONE CELEBRITY', 'STORY a ADJECTIVE PERSON', 'STORY a ADJECTIVE IDEOLOGY', 'STORY a ADJECTIVE NATIONALITY', 'STORY a ADJECTIVE NATIONALITY BOSS', 'TATTOO', 'addicted to DRUG', 'addicted to DRINK', 'torrents MUSIC mp3s' ],
      [ 'a RELIGION ROYALTY in a past life', 'was a ADJECTIVE ROYALTY in a past life', 'walks like a BODY BOSS', 'a BOSS in bed', 'a BOSS in the sack' ],
      [ 'HUMOP PEOPLE', 'HUMOP BODY PEOPLE', 'HUMOP the PEOPLE', 'HUMOP BODY NATIONALITY PEOPLE', 'HUMOP BODY NATIONALITY HUMANS', 'HUMOP NATIONALITY PEOPLE', 'HUMOP ADJECTIVE PEOPLE', 'HUMOP the NATIONALITY PEOPLE', 'plays GAME with PEOPLE', 'studies the effects of DRUG on PEOPLE', 'studies the effects of PLURAL on PEOPLE', 'prefers the company of PEOPLE', 'uneasy around PEOPLE', 'beats up PEOPLE', 'undresses PEOPLE with his eyes', 'leers at PEOPLE', 'sells DRUG to PEOPLE' ],
      [ 'a BODY ' + nationality, 'a ' + religion + ' PERSON', 'COMMON PREFIXIDEOLOGY', 'COMMON PREFIXIDEOLOGY', 'COMMON ' + nationality, 'COMMON ' + nationality + ' PREFIXIDEOLOGY', 'COMMON ' + nationality + ' IDEOLOGY', 'IDEOLOGY CELEBRITY FAN', 'COMMON IDEOLOGY' ],
      [ 'a TRAITLY TRAITADJ PERSON', 'a TRAITLY TRAITADJ ' + nationality, 'a TRAITLY TRAITADJ IDEOLOGY', 'a TRAITLY TRAITADJ CELEBRITY FAN', 'has a ACCENT ' + nationality + ' accent', 'speaks in a ACCENT ' + nationality + ' accent' ],
      [ 'has a DEGREE degree', 'working on a DEGREE degree', 'studies DEGREE', 'did a ted-x talk on DEGREE', 'OBJOP DEGREE' ],
      [ 'a VERY ADJECTIVE PERSON', 'a VERY ADJECTIVE ' + nationality, 'a ADJECTIVE PERSON', 'a ADJECTIVE ' + nationality, 'ADJECTIVE GAME player', 'COMMON PERSON', 'ADJECTIVE CELEBRITY FAN' ],
      [ 'HUMOP PREFIXIDEOLOGYs', 'HUMOP IDEOLOGYs', 'HUMOP ADJECTIVE IDEOLOGYs', 'HUMOP CELEBRITY FANs', 'HUMOP ADJECTIVE CELEBRITY FANs' ],
      [ 'OBJOP PLURAL', 'OBJOP VICE', 'OBJOP PHENOMENON', 'OBJOP PROPERTY', 'OBJOP the PROPERTY of PEOPLE', 'OBJOP the PROPERTY of ADJECTIVE HUMANS', 'OBJOP the PROPERTY of ADJECTIVE NATIONALITY HUMANS', 'OBJOP certain PLURAL', 'OBJOP his PLURAL', 'OBJOP GAME' ],
      [ 'XLY plays GAME', 'likes to ACTIVITY', 'loves to ACTIVITY', 'no longer likes to ACTIVITY', 'doesn\'t like to ACTIVITY' ],
      [ 'self-diagnosed MILLNESS', 'diagnosed MILLNESS', 'undiagnosed MILLNESS', 'medicated MILLNESS', 'unmedicated MILLNESS' ],
      [ 'XLY wears FABRIC', 'XLY wears FABRIC SHIRTs', 'HUMOP HUMANS in FABRIC', 'HUMOP HUMANS in FABRIC SHIRTs' ],
      [ 'a PROF OCCUPATION', 'LEVEL SKILL' ],
      [ 'FAMED by HUMANS for his PROPERTY', 'FAMED by PEOPLE for his PROPERTY', 'FAMED by ADJECTIVE HUMANS for his PROPERTY', 'FAMED by NATIONALITY HUMANS for his PROPERTY', 'FAMED for his PROPERTY', 'FAMED for his ADJECTIVE PROPERTY', 'FAMED for his ACCENT ' + nationality + ' accent', 'has the PROPERTY of a BEAST', 'has the PROPERTY of a BOSS', 'guilty of VICE', 'arrested for VICE', 'guilty of PROPERTY', 'FAMED for his BODY body', 'FAMED for his BODY figure', 'FAMED for his DEGREE' ],
      [ 'WORK PLACE' ],
      [ 'PHENOMENON denialist', 'blames PEOPLE for PHENOMENON', 'philosopher of PHENOMENON', 'DOES about the PROPERTY of PHENOMENON', 'DOES about his IDEOLOGY take on PHENOMENON' ],
    ];

    // pick a random form, and a random item within it
    var form = pickRandom(pickRandom(forms));

    console.log('─────────────────────────────────────────────────');
    console.log('spawning the ' + religion + ' ' + nationality + ' ' + gender);
    console.log(form);

    // why do you do this bad thing?
    for (var i = 0 ; i < 10; i++) {
      if (gender === 'male')
        form = form.replace('PERSON', pickRandom(PERSON));
      else
        form = form.replace('PERSON', pickRandom(WOMAN));
      form = form.replace('OCCUPATION', pickRandom(OCCUPATION));
      form = form.replace('PLURAL', pickRandom(PLURAL));
      form = form.replace('VERY', pickRandom(VERY));
      form = form.replace('ADJECTIVE', pickRandom(ADJECTIVE));
      form = form.replace('WRT', pickRandom(WRT));
      form = form.replace('PLACE', pickRandom(PLACE));
      form = form.replace('WORK', pickRandom(WORK));
      form = form.replace('PEOPLE', pickRandom(PEOPLE));
      form = form.replace('COMMON', pickRandom(COMMON));
      form = form.replace('FAMED', pickRandom(FAMED));
      form = form.replace('NATIONALITY', pickRandom(NATIONALITY));
      form = form.replace('MUSIC', pickRandom(MUSIC));
      form = form.replace('GENRE', pickRandom(GENRE));
      form = form.replace('PREFIX', pickRandom(PREFIX));
      form = form.replace('TATLOC', pickRandom(TATLOC));
      form = form.replace('IDEOLOGY', pickRandom(IDEOLOGY));
      form = form.replace('CELEBRITY', pickRandom(CELEBRITY));
      form = form.replace('FAN', pickRandom(FAN));
      form = form.replace('FRAME', pickRandom(FRAME));
      form = form.replace('SKILL', pickRandom(SKILL));
      form = form.replace('STORY', pickRandom(STORY));
      form = form.replace('DRUG', pickRandom(DRUG));
      form = form.replace('DRUG', pickRandom(DRUG));
      form = form.replace('TRAITLY', pickRandom(TRAITLY));
      form = form.replace('TRAITADJ', pickRandom(TRAITADJ));
      form = form.replace('GAME', pickRandom(GAME));
      form = form.replace('TEMPERATURE', pickRandom(TEMPERATURE));
      form = form.replace('XLY', pickRandom(XLY));
      form = form.replace('RELIGION', pickRandom(RELIGION));
      form = form.replace('FABRIC', pickRandom(FABRIC));
      form = form.replace('FOOD', pickRandom(FOOD));
      form = form.replace('BODY', pickRandom(BODY));
      form = form.replace('BEAST', pickRandom(BEAST));
      form = form.replace('SHIRT', pickRandom(SHIRT));
      form = form.replace('CLONE', pickRandom(CLONE));
      form = form.replace('DEGREE', pickRandom(DEGREE));
      form = form.replace('LEVEL', pickRandom(LEVEL));
      form = form.replace('FIELD', pickRandom(FIELD));
      form = form.replace('PLURAL', pickRandom(PLURAL));
      form = form.replace('MILLNESS', pickRandom(MILLNESS));
      form = form.replace('HUMANS', pickRandom(HUMANS));
      form = form.replace('GEM', pickRandom(GEM));
      form = form.replace('ITEM', pickRandom(ITEM));
      form = form.replace('PROPERTY', pickRandom(PROPERTY));
      form = form.replace('DATESITE', pickRandom(DATESITE));
      form = form.replace('ACTIVITY', pickRandom(ACTIVITY));
      form = form.replace('BOSS', pickRandom(BOSS));
      form = form.replace('FRUIT', pickRandom(FRUIT));
      form = form.replace('BOOZE', pickRandom(BOOZE));
      form = form.replace('DRINK', pickRandom(DRINK));
      form = form.replace('VESSEL', pickRandom(VESSEL));
      form = form.replace('MATERIAL', pickRandom(MATERIAL));
      form = form.replace('INSTRUMENT', pickRandom(INSTRUMENT));
      form = form.replace('ROYALTY', pickRandom(ROYALTY));
      form = form.replace('PROF', pickRandom(PROF));
      form = form.replace('ACCENT', pickRandom(ACCENT));
      form = form.replace('HUMOP', pickRandom(HUMOP));
      form = form.replace('OBJOP', pickRandom(OBJOP));
      form = form.replace('PHENOMENON', pickRandom(PHENOMENON));
      form = form.replace('VICE', pickRandom(VICE));
      form = form.replace('TATTOO', pickRandom(TATTOO));
      form = form.replace('DOES', pickRandom(DOES));
      form = form.replace('liberal liberal', 'liberal');
      form = form.replace('conservative conservative', 'conservative');
      form = form.replace(/ a (?=[aeiou])/,' an ');
      form = form.replace(/^a (?=[aeiou])/,'an ');
    }
    if (gender === 'female') {
      form = form.replace(/his /g, 'her '); //todo: all instances
      form = form.replace(/ he /, ' she '); //todo: all instances
      form = form.replace('filipino', 'filipina');
    }

    return form;
  }

  function capitalize (str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  function pickRandom(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }

  function pickRandomName(ar,gender) {
    if (gender === 'male')
      return ar[0][Math.floor(Math.random() * ar[0].length)];
    else
      return ar[1][Math.floor(Math.random() * ar[1].length)];
  }

  function randomBetween (min, max) {
    return (Math.random() * (max - min)) + min;
  } 

  function pickRandomBetween(ar, min, max) {
    return ar[Math.round(randomBetween(min,max))];
  }

  function randomChars(minLen, maxLen) {
    var str = "";
    var vowels = "aaaaaeeeeeeiiiooouuu";
    var consonants = "bbcddfghhklmnprstvzwwy";
    for (var i = 0; i < randomBetween(minLen, maxLen - 1); i++) {
      str += pickRandom(consonants);
      str += pickRandom(vowels);
    }
    if (Math.random() > .5)
      str += pickRandom(consonants);
    return str;
  }

  function generateName (nationality, gender) {
    var name = randomChars(2, 3);
    var surname = randomChars(2, 4);

    if (gender === 'female')
      name = feminizeName(name);

    function feminizeName (name) {
      if (Math.random() > .5)
        name = name + "ina";
      else if (Math.random() > .3)
        name = name + "ette";
      else
        name = name + "na";
      return name;
    }

    function russifyName (name) {
      name = name.replace("w","v"); //todo replaceall
      name = name.replace("h","kh");
      name = name.replace("j","zh");
      name = name.replace("c","k");
      name = name.replace("x","ks");
      if (gender === 'female')
        return name + pickRandom(["na", "ya"]);
      else
        return name + pickRandom(["", "slav", "nik"]);
    }

    function russifySurname (name) {
      name = name.replace("w","v"); //todo replaceall
      name = name.replace("h","kh");
      name = name.replace("j","zh");
      name = name.replace("c","k");
      name = name.replace("x","ks");
      return name + pickRandom(["nov", "novsky", "novich"]);
    }

    function frenchifyName (name) {
      if (Math.random() > 0.7)
        name = name.replace('e', 'é');
      if (Math.random() > 0.5)
        name = name.replace('c', 'ç');
      if (Math.random() > 0.8)
        name = name.replace('a', 'à');
      if (Math.random() > 0.9)
        name = name.replace('o', 'où');
      return name;
    }

    function germanizeName (name) {
      if (Math.random() > 0.3)
        name = name.replace(/u/g, 'ü');
      if (Math.random() > 0.3)
        name = name.replace(/o/g, 'ö');
      name = name.replace(/y/g, 'j');
      return name;
    }

    function turkifyName (name) {
      name = name.replace(/u/g, 'ü');
      name = name.replace(/o/g, 'ö');
      name = name.replace(/s/g, 'ş');
      name = name.replace(/g/g, 'ğ');
      name = name.replace(/c/g, 'ç');
      return name;
    }

    function nordifyName (name) {
      if (Math.random() > 0.8)
        name = name.replace('o', 'ø');
      if (Math.random() > 0.8)
        name = name.replace('a', 'å');
      name = name.replace(/z/g, 'k');
      return name;
    }

    if (nationality === 'russian' || nationality === 'ukrainian') {
      surname = randomChars(2,2);
      surname = russifySurname(surname);
      if (Math.random() > .1) {
        name = pickRandomName(RUSNAMES, gender);
      } else {
        name = randomChars(2,2);
        name = russifyName(name);
      }
    } else if (nationality === 'polack') {
      name = randomChars(2,2);
      surname = randomChars(2,2);
      name = russifyName(name);
      surname = russifySurname(surname);
      name = name.replace(/v/g, 'w');
      name = name.replace(/y/g, 'i');
      name = name.replace(/l/g, 'ł');
      name = name.replace(/z/g, 'ź');
      name = name.replace(/ch/g, 'tz');
      name = name.replace(/kh/g, 'h');
      surname = surname.replace(/v/g, 'w');
      surname = surname.replace(/y/g, 'i');
      surname = surname.replace(/l/g, 'ł');
      surname = surname.replace(/z/g, 'ź');
      surname = surname.replace(/ch/g, 'tz');
      surname = surname.replace(/kh/g, 'h');
    } else if (nationality === 'black' || nationality === 'african american') {
      if (gender === 'male')
        name = pickRandom(BLACKNAMES);
      surname = pickRandom(['williams', 'johnson', 'smith', 'jones', 'brown', 'jackson', 'davis', 'thomas', 'harris', 'robinson', 'taylor', 'wilson', 'moore', 'white', 'lewis', 'walker', 'green', 'washington', 'thompson', 'anderson', 'scott', 'carter', 'miller', 'king', 'coleman', 'james', 'franklin', 'tucker', 'berry', 'little']);
    } else if (nationality === 'european') {
      if (Math.random() > 0.7) {
        name = frenchifyName(name);
        surname = frenchifyName(surname);
      } else if (Math.random() > 0.7) {
        name = germanizeName(name);
        surname = germanizeName(surname);
      } else {
        name = nordifyName(name);
        surname = nordifyName(surname);
      }
    } else if (nationality === 'jew' || nationality === 'israeli') {
      name = pickRandomName(JEWNAMES, gender);

      if (Math.random() > 0.7) 
        surname = pickRandom(JEWNAMES[0]);
      else (Math.random() > .5)
        surname = pickRandom([ 'stone', 'blum', 'bloom', 'alter', 'bern', 'blatt', 'apfel', 'zucker', randomChars(2,2) ]) + pickRandom([ 'stein', 'stain', 'berg', 'man', 'field', 'baum' ]);

      if (name === surname)
        surname = russifySurname(randomChars(2,2));

    } else if (nationality === 'german' || nationality === 'bavarian') {
      name = pickRandomName(GERMANNAMES, gender);
      surname = pickRandom(['muller', 'schmidt', 'schneider', 'fischer', 'weber', 'meyer', 'wagner', 'becker', 'schulz', 'hoffman', 'schafer', 'koch', 'bauer', 'richter', 'klein', 'wolf', 'schoder', 'neumann', 'schwartz', 'zimmerman', 'braun', 'kruger', 'lange', 'schmitt', 'krause', 'lehmann', 'stirner']);
    } else if (nationality === 'greek' || nationality === 'macedonian') {
      name = pickRandomName(GREEKNAMES, gender);
      surname = pickRandom(GREEKSURNAMES);
    } else if (nationality === 'turk') {
      name = turkifyName(name);
      surname = turkifyName(surname);
    } else if (nationality === 'viet') {
      name = pickRandomName(WHITENAMES, gender);
      surname = pickRandom(VIETSURNAMES);
    } else if (nationality === 'desi') {
      name = pickRandomName(DESINAMES, gender);
      surname = pickRandom(DESISURNAMES);
    } else if (nationality === 'swede') {
      name = pickRandomName(SWEDENAMES, gender);
      surname = pickRandom(['ander', 'johan', 'karl', 'nils', 'erik', 'lars', 'sven', 'gustav', 'gustafs', 'peters', 'jons', 'jans', 'bengts', 'jöns', 'jakobs', 'olofs', 'ek', 'gunnars', 'samuel', 'holm', 'isaks', 'arvids', 'söder', 'björk', 'berg', 'sjö', 'sund', 'ny', 'vik', 'holm' ]);
      if (Math.random() > .8)
        surname += 'son';
      else if (Math.random() > .8)
        surname += 'quist';
      else if (Math.random() > .8)
        surname += 'ström';
      else if (Math.random() > .8)
        surname += 'lund';
      else if (Math.random() > .8)
        surname += 'end';
    } else if (nationality === 'dane' ) {
      name = nordifyName(name);
      surname = nordifyName(surname);
    } else if (nationality === 'algerian' || nationality === 'arab' || nationality === 'palestinian' || nationality === 'saudi' || nationality === 'egyptian' || nationality === 'bedouin') {
      name = pickRandomName(ARABNAMES, gender);
      surname = pickRandom(['abbas', 'abdul', 'ahmad', 'Al-Mubarak', 'Al-Bariqi', 'alavi', 'ali', 'amri', 'Al-Asiri', 'ata', 'awad', 'ayad', 'badawi', 'ghali', 'gaddafi', 'Al Hamdan', 'hamid', 'hussein']);
    } else if (nationality === 'korean' ) {
      if (gender === 'male')
        name = pickRandom(KOREANNAMES);
      else
        name = pickRandomName(WHITENAMES);
      surname = pickRandom(['kim', 'pak', 'yi', 'ri', 'chong', 'cho', 'kang', 'chang', 'yung', 'han', 'so', 'song', 'chu', 'kwak', 'ki']);
    } else if (nationality === 'filipino') {
      surname = pickRandom(HISPANICSURNAMES);
    } else if (nationality === 'mexican' || nationality === 'spaniard') {
      name = pickRandomName(HISPANICNAMES,gender);
      surname = pickRandom(HISPANICSURNAMES);
      var surname2 = capitalize(pickRandom(['garcia', 'lopez', 'rodriguez', 'hernandez', 'martinez', 'gonzalez', 'perez', 'sanchez', 'ramirez', 'flores', 'torres', 'rivera', 'diaz', 'cruz', 'alvarez', 'castillo', 'romero', 'vega' ]));
      if (Math.random() > 0.5 && capitalize(surname) !== surname2)
        surname = surname + '-' + surname2;
    } else if (nationality === 'colombian') {
      name = pickRandomName(HISPANICNAMES, gender);
      surname = pickRandom(COLOMBIANSURNAMES);
    } else if (nationality === 'american' || nationality === 'brit' || nationality === 'canadian' || nationality === 'australian' || nationality === 'goy') {
      name = pickRandomName(WHITENAMES, gender);
      surname = pickRandom(WHITESURNAMES);

      if (Math.random() > .8)
        surname += 'son';
      else if (Math.random() > .8)
        surname += 's';
      else if (Math.random() > .8)
        surname += 'ton';
      else if (Math.random() > .8)
        surname = 'O\'' + capitalize(surname);
        
    }

    name    = capitalize(name);
    surname = capitalize(surname);

    return name + " " + surname;
  }

  function makePoint (x, y) {
    return { x: x, y: y };
  }

  var images = new Map();

  images.set('base',       new Array(7));
  images.set('girlbase',   new Array(7));
  images.set('nose',       new Array(10));
  images.set('mouth',      new Array(9));
  images.set('girlmouth',  new Array(9));
  images.set('detail',     new Array(4));
  images.set('girldetail', new Array(1));
  images.set('eyes',       new Array(5));
  images.set('girleyes',   new Array(2));
  images.set('brows',      new Array(6));
  images.set('shirt',      new Array(9));
  images.set('hair',       new Array(32));
  images.set('beard',      new Array(12));
  images.set('stache',     new Array(6));
  images.set('hair',       new Array(32));

  var imagesToLoad = 0;
  
  images.forEach(function(value, key) {
    imagesToLoad += value.length;
  });

  images.forEach(function(value, key) {
    var ar = value;
    var path = key.indexOf('girl') == -1 ? 'img/' : 'img/girl/';
    for (var i = 0; i < ar.length; i++) {
      ar[i] = new Image();
      ar[i].src = path + key.replace('girl','') + (i+1) + '.png';
      ar[i].onload = function() {
        imagesToLoad--;
        if (imagesToLoad == 0) 
          generateFace();
      };
    }
  });

  // generate a random face and draw it on the main canvas
  function generateFace() {

    $('#canvas').css('background', pickRandom([ '#8cbfff', '#b9ffb9', '#8a8383', '#719064', '#8f6490', '#f5b0f7', '#a06c90', '#098876', '#a9f1e6' ]));

    gender      = pickRandom(['male','female']);
    nationality = pickRandom(NATIONALITY); // todo shouldn't be global
    religion    = pickRandom(RELIGION);

    // cases where you need to override the randomly picked religion
    if ((nationality !== 'israeli' && nationality !== 'jew' && (religion === 'jewish' || religion === 'orthodox jewish')) || (nationality !== 'desi' && (religion === 'hindu' || religion === 'sikh')))
      religion = 'atheist';
    else if (nationality === 'israeli' || nationality === 'jew')
      religion = (Math.random() > .2 ?  'jewish' : 'orthodox jewish');
    else if (nationality === 'arab' || nationality === 'algerian' || nationality === 'saudi' || nationality === 'palestinian' || nationality === 'turk' || nationality === 'egyptian' || nationality === 'uzbek' || nationality === 'indonesian' || nationality === 'albanian')
      religion = 'muslim';
    else if (nationality === 'desi')
      religion = (Math.random() > .5 ? 'hindu' : 'sikh');
    else if (nationality === 'mexican' || nationality === 'polack' || nationality === 'filipino' || nationality === 'cuban' || nationality === 'spaniard' || nationality === 'colombian')
        religion = 'catholic';
    else if (nationality === 'korean')
        religion = 'christian';
    else if (nationality === 'russian' || nationality === 'ukrainian' || nationality === 'greek' || nationality === 'macedonian' || nationality === 'ethiopian' || nationality === 'serb')
        religion = 'orthodox';
    else if (nationality === 'black' || nationality === 'african american')
      religion = (Math.random() > .2 ? 'christian' : 'muslim');

    poc     = (nationality === 'african american' || nationality === 'black' || nationality === 'uzbek' || nationality === 'algerian' || nationality === 'armenian' || nationality === 'filipino' || nationality === 'greek' || nationality === 'mongol' || nationality === 'spaniard' || nationality === 'turk' || nationality === 'arab' || nationality === 'palestinian' || nationality === 'armenian' || nationality === 'aramean' || nationality === 'gypsy' || nationality === 'cuban' || nationality === 'mexican' || nationality === 'colombian' || nationality === 'indonesian' || nationality === 'gypsy' || nationality == 'saudi' || nationality === 'georgian' || nationality === 'egyptian' || nationality === 'indonesian' || nationality === 'turk' || nationality === 'greek' || nationality === 'bedouin' || nationality === 'viet' || nationality === 'macedonian' || nationality === 'desi' );
    black   = (nationality === 'african american' || nationality === 'black' || nationality === 'ethiopian' || nationality === 'nigerian' || nationality === 'somalian');
    blondie = (nationality === 'finn' || nationality === 'swede' || nationality === 'dane' || nationality === 'german' || nationality === 'ukrainian' || nationality === 'russian' || nationality === 'european' || nationality === 'polack');
    asian   = (nationality === 'mongol' || nationality === 'korean' || nationality === 'viet');
    
    $("#spinner").hide();
    $("#canvas").css("display","inline");

    tagline = generateTagline();
    name = generateName(nationality, gender);
    $("#char-name").html(name);
    $("#char-attribute").html(tagline);

    // preset HSL offset ranges for various hair colors
    var hairColors = {
      black: { h: 0, s: 0, l: -1 },
      gray:  { h: 0, s: -1, l: randomBetween(-.5,.5) },
      blond: { h: randomBetween(0.3, 0.33), s: randomBetween(-0.4, 0.4), l: randomBetween(-0.2,0.3)},
      brown: { h: randomBetween(0.28,0.3), s: randomBetween(-1,1), l:randomBetween(-0.35,-0.3) },
      red:   { h: randomBetween(0.15,0.23), s: randomBetween(-.3,.3), l:randomBetween(-0.1,-0.15) },
    }
    var keys      = Object.keys(hairColors);
    var key       = pickRandom(keys);
    var hairShift = hairColors[key];

    if (poc)
      hairShift = hairColors['black'];
    else if (blondie)
      hairShift = hairColors['blond'];

    var canvas = document.getElementById('canvas');
    var ctx    = canvas.getContext('2d');

    ctx.clearRect(0, 0, 100, 100);
    images.forEach(function(value, key) {
      if (gender === 'female' && (key === 'base' || key === 'detail' || key === 'mouth' || key === 'stache' || key === 'beard' )) {
        return 0;
      } else if (gender === 'male' && (key === 'girlbase' || key === 'girldetail' || key === 'girlmouth' || key === 'girlmouth' || key === 'girleyes' )) {
        return 0;
      } else if (gender === 'female' && key === 'girlmouth') {
        draw(pickRandom(value), { h: randomBetween(-1,1), s: randomBetween(-1,.5), l:randomBetween(-.5,.2) });
        return 0;
      } else if (gender === 'female' && key === 'girleyes') {
        draw(pickRandom(value), { h: randomBetween(-.7,-.15), s: randomBetween(-1,0), l:randomBetween(-.5,.2) });
        return 0;
      } else if (key === 'beard' && religion === 'sikh') {
        draw(value[9], hairShift);
        return 0;
      } else if ((key == 'beard') && (religion === 'orthodox jewish' || religion === 'sikh')) {
        draw(value[3], hairShift);
        return 0;
      } else if ((key == 'stache') && (religion === 'orthodox jewish' || religion === 'sikh')) {
        draw(value[2], hairShift);
        return 0;
      } else if ((key == 'stache') && nationality === 'turk') {
        draw(value[3], hairShift);
        return 0;
      } else if ((key == 'beard') && nationality === 'turk') {
        draw(value[8], hairShift);
        return 0;
      } else if ((key == 'beard' || key == 'stache') && Math.random() > 0.3) {
        return 0;
      }

      // don't draw the image in certain cases
      if ((key == 'hair') && (Math.random() > 0.7) && religion !== 'sikh' && nationality !== 'saudi' && religion !== 'orthodox jewish' && gender !== 'female')
        return 0;
      if ((key == 'detail') && Math.random() > 0.5)
        return 0;
      if ((key == 'shirt') && Math.random() > 0.8)
        return 0;
      if ((key == 'beard' || key == 'stache') && gender == 'female')
        return 0;
      if ((key == 'beard' || key == 'stache') && nationality == 'viet')
        return 0;

      // except for special nationality/gender/religion specific cases, pick a random sprite of the current key's type
      if ((nationality === 'palestinian' || nationality === 'arab') && gender === 'male' && key === 'hair')
        draw(value[27], hairShift); // arab keffiyeh
      else if ((nationality === 'saudi' || nationality === 'bedouin') && gender === 'male' && key === 'hair')
        draw(value[27]); // saudi shemagh
      else if ((nationality === 'saudi' || nationality === 'bedouin') && gender === 'female' && key === 'hair')
        draw(value[31]); // niqab
      else if ((nationality === 'arab' || nationality === 'palestinian' || nationality === 'egyptian' || nationality === 'algerian' || nationality === 'indonesian') && gender === 'female' && key === 'hair') 
        draw(value[30], { h: randomBetween(-1,1), s: randomBetween(-1,-.5), l:randomBetween(-.5,.4) }); // hijab
      else if (religion === 'sikh' && gender === 'male' && key === 'hair')
        draw(value[28], { h: randomBetween(-1,1), s: randomBetween(-1,.5), l:randomBetween(-.5,.2) }); // turban
      else if (religion === 'orthodox jewish' && gender === 'male' && key === 'hair')
        draw(value[29], { h: randomBetween(-1,1), s: randomBetween(-1,.5), l:randomBetween(-.5,.2) }); // kippah
      else if ((key == 'beard') || (key == 'stache')) //todo eyes should have their own shift
        draw(pickRandom(value), hairShift);
      else if (key === 'eyes') 
        draw(pickRandom(value), { h: randomBetween(-.7,-.15), s: randomBetween(-1,0), l:randomBetween(-.5,.2) });
      else if (key == 'hair' && gender === 'male')
        draw(pickRandomBetween(value, 0, 26), hairShift);
      else if (key == 'hair' && gender === 'female')
        draw(pickRandomBetween(value, 0, 25), hairShift);
      else if (black && (key.indexOf('base') > -1))
        draw(value[6]);
      else if ((nationality === 'mexican' || nationality === 'indonesian' || nationality === 'cuban' || nationality === 'gypsy' || nationality === 'colombian' || nationality === 'palestinian') && (key.indexOf('base') > -1))
        draw(pickRandomBetween(value, 2, 5));
      else if ((nationality === 'ethiopian') && (key === 'nose'))
        draw(value[2]);
      else if ((nationality === 'desi') && (key === 'nose'))
        draw(value[1]);
      else if ((nationality === 'greek' || nationality === 'turk' || nationality === 'jew' || nationality === 'israeli' || nationality === 'palestinian' || nationality === 'bedouin' || nationality === 'saudi' || nationality === 'macedonian') && (key === 'nose'))
        draw(value[6]);
      else if ((black || nationality === 'mongol' || nationality === 'filipino' || nationality === 'viet') && (key === 'nose'))
        draw(value[3]);
      else if ((nationality === 'greek' || nationality === 'turk' || nationality === 'armenian' || nationality === 'filipino' || nationality === 'macedonian') && (key.indexOf('base') > -1))
        draw(value[3]);
      else if ((nationality === 'indonesian' || nationality === 'bedouin' || nationality === 'algerian' || nationality === 'aramean' || nationality === 'desi') && (key.indexOf('base') > -1))
        draw(value[5]);
      else if ((nationality === 'korean' || nationality === 'mongol' || nationality === 'viet') && (key.indexOf('base') > -1))
        draw(value[1]);
      else if ((nationality === 'russian' || nationality === 'ukrainian') && key === 'shirt')
        draw(value[8]);
      else if (poc && (key.indexOf('base') > -1))
        draw(pickRandomBetween(value, 1, 6));
      else if (key === 'base' || key === 'girlbase')
        draw(value[0]);
      else
        draw(pickRandom(value));
    });
  }

  function draw(img, hairShift) {
    var canvas  = document.getElementById('canvas');                        
    var canvas2 = document.getElementById('canvas2');
    var ctx     = canvas.getContext('2d');
    var ctx2    = canvas2.getContext('2d');
    ctx2.clearRect(0, 0, 100, 100);
    ctx2.drawImage(img, 0, 0);
    if (typeof hairShift !== 'undefined')
      randomHSL(ctx2, hairShift);
    ctx.drawImage(canvas2, 0, 0);
  }

  function randomHSL(ctx, hairShift) {
    var imgData = ctx.getImageData(0,0, 100, 100);
    var data = imgData.data;
    for (var i = 0; i < data.length; i+= 4) {
      r = data[i];
      g = data[i+1];
      b = data[i+2];
      var hsl = rgbToHsl(r,g,b);

      if (hsl[0] > .7 && hsl[0] < .99) {
        hsl[0] += hairShift.h;
        if (hsl[0] > 1)
          hsl[0] -= 1;
        else if (hsl[0] < 0)
          hsl[0] += 1;

        hsl[1] += hairShift.s;
        if (hsl[1] > 1)
          hsl[1] = 1;
        else if (hsl[1] < 0)
          hsl[1] = 0;

        hsl[2] += hairShift.l;
        if (hsl[2] > 1)
          hsl[2] = 1;
        else if (hsl[1] < 0)
          hsl[2] = 0;
      }

      var newRGB = hslToRgb(hsl[0], hsl[1], hsl[2]);

      data[i]   = newRGB[0];
      data[i+1] = newRGB[1];
      data[i+2] = newRGB[2];
    }
    ctx.putImageData(imgData, 0, 0);
  }

  function hslToRgb(h, s, l){
    var r, g, b;
  
    if (s == 0){
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return [r * 255, g * 255, b * 255];
  }
  
  function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h, s, l];
  }

  document.getElementById("not").onclick = generateFace;

  document.getElementById("hot").onclick = function() {
    tulpas.push(makeTulpa(Math.random() * 10, Math.random() * 10, name, tagline, gender, nationality, religion));
    $("#canvas").appendTo("#accepted").attr("id","tulpa-" + tulpas.length).on("click",function() {
      $("#char-name").html(tulpas[  parseInt($(this).attr("id").split("-")[1]) - 1 ].name);
      $("#char-attribute").html(tulpas[  parseInt($(this).attr("id").split("-")[1]) - 1 ].tagline);
      $("#canvas").detach();
      $(this).attr("id","canvas").prependTo("#char");
    });
    $("#char").prepend('<canvas id="canvas" width=100 height=100 style="display:none;"></canvas>');
    console.log(tulpas);
    generateFace();
  }

}
