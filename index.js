var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name)
{
  return kittens.push(name)
}
function destructivelyPrependKitten(name)
{
  return kittens.shift(name)
}
function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens

}
