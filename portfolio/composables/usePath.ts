export function getPath(){
  const path = useRoute()
  return path.name?.toString()
}