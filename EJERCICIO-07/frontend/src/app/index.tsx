import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://172.17.21.39:3000';

export default function HomeScreen() {
  const [mensaje, setMensaje] = useState('Cargando...');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const cargarMensaje = async () => {
    setCargando(true);
    setError('');

    try {
      const respuesta = await fetch(`${API_URL}/mensaje`);

      if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
      }

      const datos: { texto?: string } = await respuesta.json();
      setMensaje(datos.texto ?? 'El servidor no devolvió un mensaje');
    } catch (errorDesconocido) {
      setMensaje('');
      setError(
        errorDesconocido instanceof Error
          ? errorDesconocido.message
          : 'No se pudo conectar con el servidor',
      );
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarMensaje();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Carga automática
      </Text>
      {mensaje ? <Text style={styles.status}>{mensaje}</Text> : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title={cargando ? 'Cargando...' : 'Recargar'}
        onPress={cargarMensaje}
        disabled={cargando}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});