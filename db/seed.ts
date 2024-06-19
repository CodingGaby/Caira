import { Articles, db, Users } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Users).values([
		{
			id: crypto.randomUUID(),
			enrollment: 20106746,
			email: "jorge@umad.edu.mx",
			passwrd: "Blosito9045",
			firstName: "Jorge",
			lastName: "Osorio",
			isAdmin: true,
			profilePhotoURL: "https://avatars.githubusercontent.com/u/92534308?v=4"
		}
	])
	await db.insert(Articles).values([
		{
			id: crypto.randomUUID(),
			imageURL: "https://firebasestorage.googleapis.com/v0/b/apipa-101ce.appspot.com/o/Screenshot%202024-06-18%20180124.png?alt=media&token=387f5698-5061-429f-ab0e-8c819894cf5c",
			title: "Introduction to Computers and Programming",
			resume: "Chapter 1 Introduction to Computers and Programming. This book introduces you to the fundamental concepts of computer programming using the. Python language...",
			content: "1.1 Introduction Think about some of the different ways that people use computers. In school, students use computers for tasks such as writing papers, searching for articles, sending email, and participating inonline classes. At work, people use computers to analyze data, make presentations, conduct business transactions, communicate with customers and coworkers, control machines in manufacturing facilities, and do many other things. At home, people use computers for tasks such as paying bills, shopping online, communicating with friends and family, and playing computer games.And don’t forget that cell phones, iPods®, BlackBerries®, car navigation systems, and manyother devices are computers too. The uses of computers are almost limitless in our everyday lives.Computers can do such a wide variety of things because they can be programmed. This meansthat computers are not designed to do just one job, but to do any job that their programs tellthem to do. A program is a set of instructions that a computer follows to perform a task. Forexample, Figure 1-1 shows screens from two commonly used programs, Microsoft Word andAdobe Photoshop. Microsoft Word is a word processing program that allows you to create,edit, and print documents with your computer. Adobe Photoshop is an image editing programthat allows you to work with graphic images, such as photos taken with your digital camera.Programs are commonly referred to as software. Software is essential to a computer becauseit controls everything the computer does. All of the software that we use to make our computers useful is created by individuals working as programmers or software developers. Aprogrammer, or software developer, is a person with the training and skills necessary todesign, create, and test computer programs. Computer programming is an exciting andrewarding career. Today, you will find programmers\’ work used in business, medicine, government, law enforcement, agriculture, academics, entertainment, and many other fields.",
		},
		{
			id: crypto.randomUUID(),
			imageURL: "https://marketplace.canva.com/EAE8SCCNlvo/1/0/1003w/canva-verde-y-rosa-ciencia-ficci%C3%B3n-portada-de-libro-SSKxUZUBOJg.jpg",
			title: "Las vidas dentro de tu cabeza",
			resume: "La obra es una exploración fascinante de cómo la neurociencia y la inteligencia emocional se entrelazan en el tapiz de la experiencia humana...",
			content: "En este libro exploramos cómo la neurociencia y la inteligencia emocional se entrelazan para formar el tapiz complejo de la experiencia humana. Desde el análisis profundo de cómo el cerebro procesa la información hasta cómo regula nuestras emociones más profundas, cada capítulo ofrece una mirada detallada y accesible a estos fascinantes aspectos de nuestra mente.\nComenzamos por entender los fundamentos biológicos y neurológicos que subyacen a nuestras emociones y respuestas emocionales. A través de estudios de casos y descubrimientos científicos recientes, desentrañamos los misterios de cómo los circuitos neuronales influyen en nuestras percepciones y decisiones emocionales.\nAdemás, el libro explora estrategias prácticas para mejorar nuestro bienestar emocional y mental. Desde técnicas de regulación emocional hasta métodos para cultivar la inteligencia emocional, se presentan herramientas que permiten al lector navegar por la complejidad de sus propias emociones con mayor comprensión y empatía.\nCada capítulo está diseñado para ser informativo y reflexivo, ofreciendo al lector un viaje intelectual a través de las profundidades de su propia mente. Se discuten temas como la plasticidad cerebral, la memoria emocional y la influencia de los neurotransmisores en nuestro estado de ánimo diario.\nEn resumen, este libro no solo proporciona conocimientos científicos actualizados sobre la mente humana, sino que también invita a una reflexión profunda sobre cómo podemos utilizar ese conocimiento para mejorar nuestra calidad de vida emocional y mental.",
			authors:{
				authorsList: [ 
					{
						id: crypto.randomUUID(),
						name: "Daniel Goleman"
					},
					{
						id: crypto.randomUUID(),
						name: "Antonio Damasio"
					}
				]
			}
		},
	])
}