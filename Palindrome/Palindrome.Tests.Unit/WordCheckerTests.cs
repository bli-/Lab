using NUnit.Framework;

namespace Palindrome.Tests.Unit
{
    public class WordCheckerTests
    {
        [TestCase("obo", ExpectedResult=true)]
        [TestCase("poop", ExpectedResult=true)]
        [TestCase("simis", ExpectedResult=true)]
        public bool IsPalindrome_ShouldReturnTrue_WhenGivenValidPalindrome(string input)
        {
            var sut = new WordChecker();
            var result = sut.IsPalindrome(input);

            return result;
        }

        [TestCase("string", ExpectedResult = false)]
        [TestCase("ex", ExpectedResult = false)]
        [TestCase("fast", ExpectedResult = false)]

        public bool IsPalindrome_ShouldReturnFalse_WhenGivenNonPalindrome(string input)
        {
            var sut = new WordChecker();
            var result = sut.IsPalindrome(input);

            return result;
        }
    }
}