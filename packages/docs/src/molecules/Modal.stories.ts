import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Modal Component (Web Component)
 *
 * Componente de modal/diálogo del Seguros Bolivar UI Design System construido con Lit Element.
 *
 * ## 📋 Referencia Rápida de Atributos
 *
 * | Atributo | Tipo | Default | Descripción |
 * |----------|------|---------|-------------|
 * | `open` | `boolean` | `false` | Mostrar/ocultar el modal |
 * | `title` | `string` | `''` | Título del modal |
 * | `close-on-backdrop` | `boolean` | `true` | Cerrar al hacer clic fuera |
 * | `show-close-button` | `boolean` | `true` | Mostrar botón cerrar (×) |
 *
 * ## 🎯 Slots Disponibles
 *
 * | Slot | Descripción |
 * |------|-------------|
 * | `header` | Contenido personalizado del header (reemplaza title) |
 * | (default) | Contenido principal del modal (body) |
 * | `footer` | Contenido del footer (botones de acción) |
 *
 * ## 💡 Notas Importantes
 *
 * - **Backdrop**: Fondo oscuro semi-transparente detrás del modal
 * - **Scroll lock**: Bloquea el scroll del body cuando está abierto
 * - **ESC key**: Cierra el modal al presionar Escape
 * - **Focus trap**: Mantiene el foco dentro del modal
 * - **Eventos**: Emite `modal-close` al cerrar
 * - **Métodos**: `openModal()` y `close()` disponibles programáticamente
 */
const meta: Meta = {
  title: 'Molecules/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de modal con slots personalizables, cierre por ESC/backdrop, bloqueo de scroll y animaciones suaves.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Mostrar/ocultar el modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    title: {
      control: 'text',
      description: 'Título del modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Cerrar al hacer clic en el backdrop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Mostrar botón cerrar (×)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con el modal y sus diferentes configuraciones.
 */
export const Playground: Story = {
  args: {
    open: false,
    title: 'Título del Modal',
    closeOnBackdrop: true,
    showCloseButton: true,
  },
  render: (args) => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .modal-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
    </style>

    <div class="modal-demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-playground');
          if (modal) {
            (modal as any).openModal();
          }
        }}"
      >
        Abrir Modal
      </button>

      <sb-ui-modal
        id="modal-playground"
        ?open="${args.open}"
        title="${args.title}"
        ?close-on-backdrop="${args.closeOnBackdrop}"
        ?show-close-button="${args.showCloseButton}"
      >
        <p>Este es el contenido del modal. Puedes poner cualquier contenido aquí.</p>

        <div slot="footer">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="${() => {
              const modal = document.getElementById('modal-playground');
              if (modal) {
                (modal as any).close();
              }
            }}"
          >
            Cancelar
          </button>
          <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `,
};

/**
 * ## Modal Básico
 *
 * Modal simple con título y contenido.
 */
export const ModalBasico: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-basic');
          if (modal) {
            (modal as any).openModal();
          }
        }}"
      >
        Abrir Modal Básico
      </button>

      <sb-ui-modal id="modal-basic" title="Información Importante">
        <p>Este es un modal básico con título y contenido simple.</p>
        <p>
          Puedes cerrar este modal haciendo clic fuera de él, presionando ESC o usando el botón de
          cerrar (×).
        </p>
      </sb-ui-modal>
    </div>
  `,
};

/**
 * ## Con Footer Personalizado
 *
 * Modal con botones de acción en el footer.
 */
export const ConFooterPersonalizado: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-footer');
          if (modal) {
            (modal as any).openModal();
          }
        }}"
      >
        Abrir Modal con Footer
      </button>

      <sb-ui-modal id="modal-footer" title="Confirmar Acción">
        <p>¿Estás seguro de que deseas continuar con esta acción?</p>
        <p>Esta operación no se puede deshacer.</p>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="${() => {
              const modal = document.getElementById('modal-footer');
              if (modal) {
                (modal as any).close();
              }
            }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-footer');
              if (modal) {
                (modal as any).close();
                alert('Acción confirmada');
              }
            }}"
          >
            Confirmar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `,
};

/**
 * ## Modal de Confirmación
 *
 * Modal para confirmaciones destructivas o importantes.
 */
export const ModalConfirmacion: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
      .warning-content {
        padding: 1rem;
        background: var(--sb-ui-color-feedback-warning-L400);
        border-left: 4px solid var(--sb-ui-color-feedback-warning-base);
        border-radius: 4px;
        margin-bottom: 1rem;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-confirm');
          if (modal) {
            (modal as any).openModal();
          }
        }}"
      >
        Eliminar Cuenta
      </button>

      <sb-ui-modal id="modal-confirm" title="⚠️ Confirmar Eliminación">
        <div class="warning-content">
          <strong>Advertencia:</strong> Esta acción es permanente y no se puede deshacer.
        </div>
        <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
        <p>Perderás acceso a todos tus datos y configuraciones.</p>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="${() => {
              const modal = document.getElementById('modal-confirm');
              if (modal) {
                (modal as any).close();
              }
            }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--error sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-confirm');
              if (modal) {
                (modal as any).close();
                alert('Cuenta eliminada');
              }
            }}"
          >
            Sí, Eliminar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `,
};

/**
 * ## Modal con Formulario
 *
 * Modal que contiene un formulario completo.
 */
export const ModalConFormulario: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .form-field {
        margin-bottom: 1.5rem;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-form');
          if (modal) {
            (modal as any).openModal();
          }
        }}"
      >
        Agregar Usuario
      </button>

      <sb-ui-modal id="modal-form" title="Nuevo Usuario">
        <form
          @submit="${(e: Event) => {
            e.preventDefault();
            const modal = document.getElementById('modal-form');
            if (modal) {
              (modal as any).close();
              alert('Usuario creado');
            }
          }}"
        >
          <div class="form-field">
            <label class="sb-ui-input-label sb-ui-input-label--required">Nombre completo</label>
            <input class="sb-ui-input" type="text" placeholder="Juan Pérez" required />
          </div>

          <div class="form-field">
            <label class="sb-ui-input-label sb-ui-input-label--required">Email</label>
            <input class="sb-ui-input" type="email" placeholder="juan@example.com" required />
          </div>

          <div class="form-field">
            <label class="sb-ui-input-label">Rol</label>
            <select class="sb-ui-select">
              <option value="">Seleccionar rol</option>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
              <option value="guest">Invitado</option>
            </select>
          </div>

          <div slot="footer" class="footer-actions">
            <button
              type="button"
              class="sb-ui-button sb-ui-button--tertiary"
              @click="${() => {
                const modal = document.getElementById('modal-form');
                if (modal) {
                  (modal as any).close();
                }
              }}"
            >
              Cancelar
            </button>
            <button type="submit" class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
              Crear Usuario
            </button>
          </div>
        </form>
      </sb-ui-modal>
    </div>
  `,
};

/**
 * ## Modal con Contenido Largo
 *
 * Modal con scroll interno para contenido extenso.
 */
export const ContenidoLargo: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
      }
      .long-content p {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
      .footer-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    </style>

    <div class="demo">
      <button
        class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
        @click="${() => {
          const modal = document.getElementById('modal-long');
          if (modal) {
            (modal as any).openModal();
          }
        }}"
      >
        Ver Términos y Condiciones
      </button>

      <sb-ui-modal id="modal-long" title="Términos y Condiciones">
        <div class="long-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit.
          </p>
        </div>

        <div slot="footer" class="footer-actions">
          <button
            class="sb-ui-button sb-ui-button--tertiary"
            @click="${() => {
              const modal = document.getElementById('modal-long');
              if (modal) {
                (modal as any).close();
              }
            }}"
          >
            Cancelar
          </button>
          <button
            class="sb-ui-button sb-ui-button--primary sb-ui-button--fill"
            @click="${() => {
              const modal = document.getElementById('modal-long');
              if (modal) {
                (modal as any).close();
                alert('Términos aceptados');
              }
            }}"
          >
            Aceptar
          </button>
        </div>
      </sb-ui-modal>
    </div>
  `,
};

