const express =require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
                title: 'LOLITHA',
          description: 'The novel is notable for its controversial subject:the protagonist and unreliable narrator, a middle-aged literature professor under the pseudonym Humbert Humbert, is obsessed with a 12-year-old girl, Dolores Haze, with whom he becomes sexually involved after he becomes her stepfather. "Lolita" is his private nickname for Dolores. The novel was originally written in English and first published in Paris in 1955 by Olympia Press. Later it was translated into Russian by Nabokov himself and published in New York City in 1967 by Phaedra Publishers. In the novel, Dolores eventually escapes Humbert, who has an emotional breakdown. In time, when they next see each other, Dolores is pregnant but suffering financially.',
                 img: 'image1.jpg'
        },
        {
                title: 'MADAME BOVARY',
          description:'For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for "offenses against morality and religion." What shocks us today about Flauberts devastatingly realized tale of a young woman destroyed by the reckless pursuit of her romantic dreams is its pure artistry: the poise of its narrative structure, the opulence of its prose (marvelously captured in the English translation of Francis Steegmuller), and its creation of a world whose minor figures are as vital as its doomed heroine. In reading Madame Bovary, one experiences a work that remains genuinely revolutionary almost a century and a half after its creation.',
                  img: 'image2.jpeg'
        },
        {
                title: 'ANNA KARENINA',
          description:'Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endure the hypocrisies of society. Set against a vast and richly textured canvas of nineteenth-century Russia, the novels seven major characters create a dynamic imbalance, playing out the contrasts of city and country life and all the variations on love and family happiness.Acclaimed by many as the worlds greatest novel, this book provides a vast panorama of contemporary life in Russia and of humanity in general. In it Tolstoy uses his intense imaginative insight to create some of the most memorable characters in all of literature.',  
                  img:   'image3.jpg'
        },
        {
                title: 'THE BLUE UMBRELLA',
          description:'The Blue Umbrella is a 1980 Indian novel written by Ruskin Bond. It was adapted into 2005 Hindi film by the same name, directed by Vishal Bhardwaj, which later won the National Film Award for Best Childrens Film. It was directed by Vishal Bhardwaj and starred Shreya Sharma and Pankaj Kapur in lead roles. The music was by Bhardwaj and lyrics were penned by Gulzar.A pretty little umbrella which is blue in color brings unbound happiness in Binyas life. She carries it everywhere with so much love and affection. There is this old shopkeeper Ram Bharosa who is eyeing this prized possession of the young girl of Garhwal. He tries to have his way and get the umbrella under his paws.',
                  img:   'img20.jpg'
        }, 
        {
                title: 'EVERYTHING EVERYTHING',
          description:' A teenager who spent her whole life confined to her home falls for the boy next door. A 17 year old girl named Madeline Whittier has a rare disease that causes her to have to stay indoors 24/7 with her filtered air. Her whole life is basically books, her mom, and Carla(her nurse). There are some scenes that are not appropriate for younger kids but if you and your parents agree it is a really well written and awesome book.The book is the debut young adult novel by Jamaican-American author Nicola Yoon, first published by Delacorte Books for Young Readers in 2015. I feel that the authors purpose for writing this book was to inspire people to take control of their own life.',
                  img:   'img21.jpg'
        },
        {
                title: 'THE STORY OF MY LIFE',
          description:'An American classic rediscovered by each generation, The Story of My Life is Helen Kellers account of her triumph over deafness and blindness. Popularized by the stage play and movie The Miracle Worker, Kellers story has become a symbol of hope for people all over the world.The Story of My Life is worth reading primarily because it is a compelling account of one womans triumph against the odds. ... Such an inspiring story of hope, especially one as well-written as this one, is always well worth reading.The Story of My Life, first published in 1903, is Helen Kellers autobiography detailing her early life, especially her experiences with Anne Sullivan.',
                  img:   'img22.jpg'
        }  
]
         booksRouter.get('/',function(req,res){
            res.render("books",{
                nav:[{link:'/authors',name:'Authors'},{link:'/books',name:'Books'}],
                title:' V.K.Library-Books',
                books 
            });
        });
        booksRouter.get('/:id',function(req,res){
             const id = req.params.id
             res.render('book',{
                nav:[{link:'/authors',name:'Authors'},{link:'/books',name:'Books'}],
                title:' V.K.Library-Books',
                book:books[id]
                
             })
        })
             return booksRouter ;
}

module.exports = router;






