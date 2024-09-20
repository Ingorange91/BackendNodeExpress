//Se puede utilizar utilizando el sistema de archivos aunque no es el metodo mas conveniente 
//para traer el json
// import fs from 'node:fs'
// const movies=JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

//Como leer un json en ESM recomendado por ahora (crear un require) seria la forma mas rapida ya que es la manera nativa y ya esta compilado a diferencia del FS

//poder leer un JSON con EMS froma recomendada antes de que se valide el width
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSON=(path) =>require(path)