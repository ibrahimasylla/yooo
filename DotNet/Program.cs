using System;

namespace DotNet
{
    class Program
    {
        static void Main(string[] args)
        {
            string []word={"Bob","Ted","Fred"};
            Random random = new Random();
            int randomIndex = random.Next(0,3);
            Console.WriteLine(randomIndex);

            string SelectWord = word[randomIndex];
            string hidden ="";

            for(int i = 0 ; i<SelectWord.Length;i++){
                hidden+="*";

            }
             //guess

            while(hidden.Contains('*')){
            
            Console.WriteLine("Word" +hidden  );
            Console.Write("ton mot");
            char lettre= char.Parse(Console.ReadLine());
           
           for(int i = 0 ; i<SelectWord.Length;i++){
           if( SelectWord[i]==lettre) {
               
           }
           }
            }

           

            
}



        

        
    }
}
