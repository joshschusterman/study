function quotes() {

    quote[0] = ""
    quote[1] = "“Unsuccessful people make decisions based on their current situation; successful people make decisions based on where they want to be.” - Anonymous"
    quote[2] = "“Don’t base your decisions on the advice of those who don’t have to deal with the results.” - Anonymous"
    quote[3] = "“Good decisions come from experience, and experience comes from bad decisions.” - Anonymous"
    quote[4] = "“You are only one decision from a totally different life.” - Anonymous"
    quote[5] = "“Always go with the choice that scares you the most, because that’s the one that is going to help you grow.” - Caroline Myss"
    quote[6] = "“In the end, we only regret the chances we didn’t take and the decisions we waited to make.” - Anonymous"
    quote[7] = "“Sometimes it’s the smallest decisions that can change your life forever.” - Anonymous"
    quote[8] = "“Make and be confident in your own decisions. Stop looking for people’s approval for everything. Live your life and do what you want.” - Anonymous"
    quote[9] = "“You don’t have to defend or explain your decisions to anyone. It’s your life. Live it without apologies.” - Anonymous"
    quote[10] = "“When someone makes a decision, he is really diving into a strong current that will carry him to places he had never dreamed of when he first made the decision.” - Paulo Coelho"

    num = Math.floor((Math.random() * 10) + 1);

    document.getElementById("quote").innerHTML = quote[num];
}
