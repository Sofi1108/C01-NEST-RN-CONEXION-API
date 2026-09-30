import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://172.17.21.39:3000';

export default function HomeScreen() {
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

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
      setError(
        errorDesconocido instanceof Error
          ? errorDesconocido.message
          : 'No se pudo conectar con el servidor',
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Mi primera conexión</Text>
        <Button
          title={cargando ? 'Conectando...' : 'Conectar con Nest'}
          onPress={cargarMensaje}
          disabled={cargando}
        />
        {mensaje ? <Text style={styles.message}>{mensaje}</Text> : null}
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  message: {
    color: 'green',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
