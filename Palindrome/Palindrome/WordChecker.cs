namespace Palindrome
{
    public class WordChecker
    {
        public bool IsPalindrome(string word)
        {
            int half = word.Length / 2;

            int end = word.Length - 1;
            for(int start = 0; start < half; start++)
            {
                if (word[start] != word[end])
                {
                    return false;
                }

                end--;
            }

            return true;
        }
    }
}
